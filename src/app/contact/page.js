"use client";

import { db } from "../firebaseConfig";

import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import Head from "next/head";

async function addDataToFireStore(name, email, message, subject) {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      name: name,
      email: email,
      message: message,
      subject: subject,
    });
    console.log("Document written with ID:", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, email, message, subject);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");

      alert("Data added to firestore DB!!");
    }
  };

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Let&apos;s talk ideas.</p>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.393215101302!2d73.8919470748195!3d18.556302982544253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12f701d42c1%3A0xf1f9d29afa080b90!2s91springboard%20Yerwada%2C%20Pune!5e0!3m2!1sen!2sin!4v1696349552517!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-4">
              <div className="info">
                <h3>Get in touch</h3>
                <p>Kindly fill-up this form.</p>

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    <p>
                      91 Springboard, Creaticity, Yerwada, Pune, India. 411006.
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:info@ideationpeople.com">
                        info@ideationpeople.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0" />
                  <div>
                    <h4>Call:</h4>
                    <p>
                      <a href="tel:+14158004211">+1 415 800 4211</a>
                    </p>
                    <p>
                      <a href="tel:+443300012448">+44 33 0001 2448</a>
                    </p>
                    <p>
                      <a href="tel:+918779300073">+91 87793 00073</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                // onSubmit={(e) => sendEnq(e)}
                onSubmit={handleSubmit}
                //role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
