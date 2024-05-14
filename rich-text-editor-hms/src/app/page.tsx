import dynamic from "next/dynamic";

export default function Home() {
  const TextEditor = dynamic(
    () => import("./Components/TextEditor/TextEditor"),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <TextEditor />
    </div>
  );
}
