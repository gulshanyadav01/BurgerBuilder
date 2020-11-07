import React from "react"

import "./Input.css"

const Input = (props) => { 
    let inputElement  = null; 

    switch (props.elementType) {
        case ("input"):
            inputElement = <input {...props.elementConfig} className = "InputElement" value = {props.value}/>
            break;
        case ("textarea"):
            inputElement = <input {...props.elementConfig} value = {props.value} />
            break;
    
        default:
            inputElement = <input {...props.elementConfig} value = {props.value} />;
    }

    return (
        <div className = "Input">
            <label className ="Label">{props.label}</label>
            {inputElement}
        </div>

    )

}

export default Input; 