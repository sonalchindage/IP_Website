import { NextResponse } from "next/server";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { trasporter } from "@/app/utils/mailSender.utils";

export async function POST(req) {
  const { email } = await req.json();
  try {
    const docRef = await addDoc(collection(db, "newsletter"), {
      email,

      timestamp: new Date(),
    });

    await trasporter.sendMail({
      from: "sonalchindage@gmail.com",
      to: email,
      subject: "Thanks for subscribe",
      text: `Thanks for subscribe:\n\nEmail: ${email}`,
      html: `<>Thanks for subscribe:</p><p><strong>Email:</strong> ${email}`,
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
