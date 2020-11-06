import React from "react"

import "./Input.css"

const Input = (props) => { 
    let inputElement  = null; 

    switch (props.inputType) {
        case ("input"):
            inputElement = <input {...props} className = "InputElement"/>
            break;
        case ("textarea"):
            inputElement = <input {...props}/>
            break;
    
        default:
            inputElement = <input {...props}/>;
    }

    return (
        <div className = "Input">
            <label className ="Label">{props.label}</label>
            {inputElement}
        </div>

    )

}

export default Input; 