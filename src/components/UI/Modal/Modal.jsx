import React, { Fragment } from "react"
import Backdrop from "../Backdrop/Backdrop"

import "./Modal.css"

const Modal = (props) => {
    const hello = <div style = {{
        opacity: props.show ? "1": "0", backgroundColor:"white"
    }}>
        {props.children}
    
    </div>
    return (
        <React.Fragment >
        <Backdrop show = {props.show} clicked = {props.modelClosed}/>
        <div class = "Modal">
            {props.show ? hello : null}
        </div>
        </React.Fragment>

    )

    

    
}

export default Modal;