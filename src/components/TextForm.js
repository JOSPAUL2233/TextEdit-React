import React from 'react'

export default function TextForm(props) {
  return (
    <div>

        <h5>{props.heading}</h5>
        <div className = "mb-3">
            <textarea className="form-control" id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary">convert to uppar case</button>
    </div>
  )
}
