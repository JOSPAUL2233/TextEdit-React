import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {


  const handleUpClick = () =>{

    let newText = text.toUpperCase();
    setText(newText);

  }

  const handleLowClick = () =>{

    let newText = text.toLowerCase();
    setText(newText);

  }

  const onChange = (event) =>{

    console.log("onChange");
    setText(event.target.value)
  }

  const [text,setText] = useState('Enter the text');

  return (
    <>
    <div>
        <h5>{props.heading}</h5>
        <div className = "mb-3">
            <textarea className="form-control" value = {text} onChange = {onChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppar case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lower case</button>
    </div>

    <div className="container">
      <h3>Your Text Summary!</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to reac</p>
      </div>
    </>
  )
}
