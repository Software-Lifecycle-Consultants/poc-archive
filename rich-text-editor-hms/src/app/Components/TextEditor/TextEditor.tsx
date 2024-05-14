"use client";
import parse from "html-react-parser";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/imageResize", ImageResize);

const TextEditor = () => {
  const [body, setBody] = useState("");
  const [submittedContent, setSubmittedContent] = useState("");

  const handleBody = (e: string) => {
    setBody(e);
  };

  const handleSubmit = () => {
    setSubmittedContent(body);
    console.log(body);
    console.log(parse(body));
  };

  return (
    <>
      <div>
        <h2>Text Editor</h2>
        <ReactQuill
          placeholder="Write something..."
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          onChange={handleBody}
          value={body}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* <div
        style={{
          display: "inline-block",
          textAlign: "center",

          justifyContent: "center",
        }}
      > */}
      {parse(submittedContent)}
      {/* </div> */}
    </>
  );
};

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  imageResize: {
    modules: ["Resize", "DisplaySize"],
  },
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default TextEditor;
