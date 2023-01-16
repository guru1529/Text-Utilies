import React, {useState} from "react";

export default function Textform(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);

    }
    const clearText =()=>{
        let newText = "";
        setText(newText);

    }
    const handleOnChange =(event)=>{
        setText( event.target.value);

    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="conatainer">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
       <button type="button" class="btn btn-primary my-3"onClick={handleUpClick}>Convert to uppercase</button>
       <button type="button" class="btn btn-primary my-3 mx-1"onClick={handleDownClick}>Convert to lowercasecase</button>
       <button type="button" class="btn btn-primary my-3 mx-1"onClick={clearText}>Clear text</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
