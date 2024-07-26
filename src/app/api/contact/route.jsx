import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");
const aws = require("@aws-sdk/client-ses");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Handles POST requests to /api

export async function POST(request) {
  //   const formData = await request.formData();
  const { firstName, lastName, email, subject, message, phone, checked, website } = await request.json();

  let transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  try {
    const mail = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject,
      html: `
            <p>Name: ${firstName} ${lastName} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>Website: ${website} </
            <p>Services: ${checked} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
