import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_Wn5UnxjM_H9agawtxJ84gtqV8imTuAEHX");

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, title } = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: title,
      // reply_to: email,
      html: message,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "Error sending email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (exception) {
    console.error("Server Exception:", exception);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
