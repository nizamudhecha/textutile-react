import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lowerrcase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text field Cleared", "success");
  };

  const changText = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extraspaces", "success");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: props.mode === "dark" ? "gray" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}>
        <div className="mb-3 container ">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={changText}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}></textarea>
          <button
            className="btn btn-primary m-2"
            disabled={text.length === 0}
            onClick={handleUpClick}>
            Convert To Upper Case
          </button>
          <button
            className="btn btn-primary m-2"
            disabled={text.length === 0}
            onClick={handleLowClick}>
            Convert To Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}>
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container">
          <h2>Your Text summary</h2>
          <p>
            {text.split(" ").filter((text) => text.length > 0).length} Words and{" "}
            {text.length} characters
          </p>
          <p>{0.008 * text.slice("").length} Minutes read</p>
        </div>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above text area to preview it here"}
        </p>
      </div>
    </>
  );
}
