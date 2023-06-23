import React, {useState} from 'react'

export default function TextForm(props) {

    const  handleUpClick=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const  handleLowClick=()=>{
      let newtext = text.toLowerCase();
      setText(newtext);
  }
  const  handleClearClick=()=>{
    let newtext = "";
    setText(newtext);
}
    const  handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control my-3" on onChange= {handleOnChange} value={text} id="MyBox" rows="8"></textarea>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convet to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convet to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
</div>

<div className="container my-5">
  <h1>Your Text Summery.</h1>
  <p>{text.split(" ").length} words and {text.length} characters.</p>
  <p>{0.008 * text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
    </>

  )
}
