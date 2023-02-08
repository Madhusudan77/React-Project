import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if(newText){
            props.showAlert("Converted to Upper Case", "success");
        }
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        let emailText = newText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        setText(newText);
        console.log(emailText);
        if(newText){
            props.showAlert("Converted to Lower Case", "success");
        }
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        if(text){
            props.showAlert("Copied to Clipboard", "success");
        }
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(newText){
            props.showAlert("Extra Spaces Removed", "success");
        }
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
                <button onClick={handleLowClick} className="btn btn-primary mx-1">Convert to Lowercase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
                <button onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
                <button onClick={handleExtraSpace} className="btn btn-primary mx-1">Remove ExtraSpace</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to Preview it here."}</p>
            </div>
        </>
    )
}
