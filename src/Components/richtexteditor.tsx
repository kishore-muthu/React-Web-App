import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [text, setText] = useState(localStorage.getItem("editorData") || "");

  const handleChange = (value: string) => {
    setText(value);
    localStorage.setItem("editorData", value);
  };

  return (
    <div>
      <ReactQuill value={text} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
