import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const [text,setText] = useState('');
  const [temp,setValue] = useState('');

  const handleUpClick = () =>{

    let newText = text.toUpperCase();
    setValue(newText);
  }

  const handleLowClick = () =>{

    let newText = text.toLowerCase();
    setValue(newText);

  }

  const handleClearClick = () =>{

    setValue('');
    setText('');

  }

  const onChange = (event) =>{
    setText(event.target.value);
    setValue(event.target.value);
  }

  return (
    <>
    <div>
        <h5>{props.heading}</h5>
        <div className = "mb-3">
            <textarea className="form-control" value = {text} onChange = {onChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppar case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container">
      <h3>Your Text Summary!</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read!</p>

      <h3>Preview</h3>
      <p>
        {temp}
      </p>
      </div>
    </>
  )
}
