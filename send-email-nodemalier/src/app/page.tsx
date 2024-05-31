import { sendMail } from "@/lib/mail";

const send = async () => {
  "use server";
  await sendMail({
    to: "sinera2000@gmail.com",
    name: "Vahid",
    subject: "Test Mail",
    body: `<h1>Hello World!</h1>`,
    attachments: [
      {
        filename: "blogpng.png",
        path: process.cwd() + "/public/blogpng.png",
      },
      {
        filename: "booking.pdf",
        path: process.cwd() + "/public/booking.pdf",
        contentType: "application/pdf",
        content: "",
      },
    ],
  });
};

export default function Home() {
  return (
    <>
      <form>
        <div style={{ alignContent: "center", width: "auto", height: "auto" }}>
          <button formAction={send}>send</button>
        </div>
      </form>
    </>
  );
}
