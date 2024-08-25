// /component/ckeditorcomponent.jsx
"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const MyCustomUploadAdapter = (loader) => {
  return {
    upload: () => {
      return new Promise((resolve, reject) => {
        loader.file.then((file) => {
          const storageRef = ref(storage, `images/${file.name}`);
          uploadBytes(storageRef, file)
            .then((snapshot) => {
              getDownloadURL(snapshot.ref)
                .then((downloadURL) => {
                  resolve({
                    default: downloadURL,
                  });
                })
                .catch((error) => {
                  reject(error);
                });
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
    },
  };
};

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return MyCustomUploadAdapter(loader);
  };
}

export default function CKEditorComponent() {
  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("editorData");
    if (savedData) {
      setEditorData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("editorData", editorData);
  }, [editorData]);

  const saveNewsletter = async () => {
    if (!editorData) {
      alert("No content to save!");
      return;
    }
    try {
      await addDoc(collection(db, "newsletters"), {
        content: editorData,
        timestamp: new Date(),
      });
      alert("Newsletter saved successfully!");
    } catch (error) {
      console.error("Error saving newsletter: ", error);
      alert("Failed to save newsletter.");
    }
  };

  const sendNewsletter = async () => {
    if (!editorData) {
      alert("No content to send!");
      return;
    }

    try {
      // Fetch all subscriber emails from Firestore
      const querySnapshot = await getDocs(collection(db, "subscribers"));
      const emails = querySnapshot.docs.map((doc) => doc.data().email);

      if (emails.length === 0) {
        alert("No subscribers found.");
        return;
      }

      // Send the newsletter to each email
      const response = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: editorData }), // Send content only
      });

      const result = await response.json();
      if (response.ok) {
        alert("Newsletter sent successfully to all subscribers!");
      } else {
        alert(result.error || "Failed to send newsletter.");
      }
    } catch (error) {
      console.error("Error sending newsletter: ", error);
      alert("Successfully send.");
    }
  };

  return (
    <div className="bg-info py-5">
      <div className="container mt-4">
        <h2 className="text-center mb-4 text-white">
          Create Newsletters using this Editor 🎨
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <CKEditor
                  editor={ClassicEditor}
                  data={editorData}
                  config={{
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "link",
                      "bulletedList",
                      "numberedList",
                      "blockQuote",
                      "insertTable",
                      "mediaEmbed",
                      "undo",
                      "redo",
                      "imageUpload",
                    ],
                    image: {
                      toolbar: [
                        "imageTextAlternative",
                        "imageStyle:full",
                        "imageStyle:side",
                      ],
                    },
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                    console.log({ event, editor, data });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <h3>Content</h3>
                <div
                  className="ck-content"
                  dangerouslySetInnerHTML={{ __html: editorData }}
                />
                <button
                  onClick={saveNewsletter}
                  className="content-btn save-newsletter-btn"
                >
                  Save Newsletter
                </button>
                <button
                  onClick={sendNewsletter}
                  className="content-btn send-email-btn"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
