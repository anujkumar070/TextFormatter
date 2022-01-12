import React, {useState} from 'react'

export default function TextForm(props) {

    const [text,setText]=useState("");
    const handleUpperCase=()=>{
            let newText = text.toUpperCase();
            setText(newText);

    }
    const handleChange=(event)=>{
        setText(event.target.value);
        
    }


    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="textbox" rows="10" value={text} onChange={handleChange} placeholder='Enter Your Text Here'></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>Convert Into UpperCase</button>
        </div>
    )
}
