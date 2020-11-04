import React from "react"

const Button = (props) => { 
    return(
        <div>
        <button onClick = {props.clicked} className = "Button">
            {props.children}
        </button>
        </div>
    )
}
export default Button; 