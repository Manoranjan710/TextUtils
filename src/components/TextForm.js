import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");

    }

    const clearOnClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");


    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extrapaces removed", "success");

    }

    return (
        <>
        <div>
            <h1 style={{color: props.mode === 'dark'?'white':'#112440'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#112440'}} id="myBox" rows="6"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={clearOnClick} > Clear Text </button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} > Copy Text </button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} > Remove Extra Spaces </button>
            <div className="container mt-3" style={{color: props.mode === 'dark'?'white':'#112440'}}>
                <h1>Your Text summary</h1>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(' ').length } minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
            </div>
        </div>
        </>
  )
}
 