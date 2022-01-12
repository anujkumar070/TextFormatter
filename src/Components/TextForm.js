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

    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const reset=()=>{
        let newText="";
        setText(newText);
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="textbox" rows="10" value={text} onChange={handleChange} placeholder='Enter Your Text Here'></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert Into UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert Into LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={reset}>Reset</button>

        </div>
        <div className="container my-2">
            <table>
            <tr><th colspan="4"><u>Text Summary: </u></th></tr>
            <tr><td><b>No. of Words:</b> {text.split(" ").length}  &#160; &#160;  &#160;  &#160; </td>
            <td><b>No. of Characters: </b>{text.length}  &#160; &#160;  &#160;  &#160; </td>
            <td><b>Time needed to read: </b>{text.length*0.008} minutes  </td></tr>
            </table>
            <h4><u>Preview: </u></h4>
            <p>{text}</p>

        </div>
        </>
    )
}
