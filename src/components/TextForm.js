import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {


  const handleClick = () =>{

    let newText = text.toUpperCase();
    setText(newText);

  }

  const onChange = (event) =>{

    console.log("onChange");
    setText(event.target.value)
  }

  const [text,setText] = useState('Enter the text');

  return (
    <div>
        <h5>{props.heading}</h5>
        <div className = "mb-3">
            <textarea className="form-control" value = {text} onChange = {onChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>convert to uppar case</button>
    </div>
  )
}
