import React from "react"

import "./Control.css"

const Control = (props) => { 
    return (
        <div className = "Control"> 
        <div className = "Label"> {props.label}</div>
        <button className = "Less" onClick = {props.ingredientDel}>Less</button>
        <button className = "More" onClick = {props.ingredientAdd}>More</button>
        </div>
    )


}

export default Control; 