import React,{useState} from 'react'
export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log("convert to uppercase clicked");
        setText(newText)
    }
      
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        // console.log("convert to uppercase clicked");
        setText(newText)
    }
    const onChangeHandle = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = "new text";      //wrong way to update the text
    // setText("asfafefaefaeef");   //correct way to update the text
    
    
    return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea className="form-control my-3" placeholder="Enter Text Here" value={text} onChange={onChangeHandle} id="exampleFormControlTextarea1" rows="7"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-danger mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
                    
            </div>
        </div>
        <div className="container">
                <h1>Summary of Text :  words {text.split(" ").length} , characters {text.length}</h1>
                <h2>{0.008 * text.split("  ").length} mins of read</h2>
                <h2>Preview of your text :- </h2>
                <p>{text}</p>
            <p></p>
        </div>
    </>
    )
}
