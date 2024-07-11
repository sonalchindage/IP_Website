// src/app/api/contact/route.js
import { NextResponse } from "next/server";
// import { db } from "../../../../firebaseConfig";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { trasporter } from "@/app/utils/mailSender.utils";
export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    await trasporter.sendMail({
      from: "sonalchindage@gmail.com",
      to: email,
      subject: "New contact form submission",
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission:</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({
      id: docRef.id,
      message: "Message sent successfully!",
    });
  } catch (e) {
    console.error("Error adding document: ", e);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
