// import { NextResponse } from "next/server";
import { db } from "@/app/firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// import { trasporter } from "@/app/utils/mailSender.utils";

// export async function POST(req) {
//   const { email } = await req.json();
//   try {
//     const docRef = await addDoc(collection(db, "newsletter"), {
//       email,

//       timestamp: new Date(),
//     });

//     await trasporter.sendMail({
//       from: "sonalchindage@gmail.com",
//       to: email,
//       subject: "Thanks for subscribe",
//       text: `Thanks for subscribe:\n\nEmail: ${email}`,
//       html: `<>Thanks for subscribe:</p><p><strong>Email:</strong> ${email}`,
//     });

//     return NextResponse.json({
//       id: docRef.id,
//       message: "Message sent successfully!",
//     });
//   } catch (e) {
//     console.error("Error adding document: ", e);
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }

// api / newsletter / route.js;
// app/api/newsletter/route.js
import { NextResponse } from "next/server";

import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  limit,
  getDoc,
  doc,
} from "firebase/firestore";
import { transporter } from "@/app/utils/mailSender.utils";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Save the subscriber email to Firestore
    await addDoc(collection(db, "subscribers"), {
      email,
      timestamp: new Date(),
    });

    // Fetch the latest newsletter content
    const newslettersQuery = query(
      collection(db, "newsletters"),
      orderBy("timestamp", "desc"),
      limit(1)
    );
    const querySnapshot = await getDocs(newslettersQuery);
    let latestNewsletterContent = "Welcome to our newsletter!";

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();
      latestNewsletterContent = data.content || latestNewsletterContent;
    }

    // Send the latest newsletter to the new subscriber
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_AUTH_MAIL,
      to: email,
      subject: "Welcome! Here's Our Latest Newsletter",
      html: latestNewsletterContent,
    });

    return NextResponse.json({
      message: "Subscription successful and newsletter sent",
    });
  } catch (error) {
    console.error("Error subscribing: ", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
