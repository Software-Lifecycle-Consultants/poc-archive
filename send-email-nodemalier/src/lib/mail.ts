import nodemailer from "nodemailer";
import ReactPDF from "@react-pdf/renderer";

const MyDocument = () => {};

export async function sendMail({
  to,
  name,
  subject,
  body,
  attachments,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
  attachments?: {
    filename: string;
    path?: string;
    content?: string | Buffer;
    encoding?: "base64";
    contentType?: string;
  }[];
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // // Render the document to a stream
  // const pdfStream = await renderToStream(<MyDocument />);

  // // Convert the stream to a buffer
  // const chunks = [];
  // for await (const chunk of pdfStream) {
  //   chunks.push(chunk);
  // }
  // const pdfBuffer = Buffer.concat(chunks);

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
      attachments,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
