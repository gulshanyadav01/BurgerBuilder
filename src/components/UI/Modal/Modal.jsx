
import React from "react"

import "./Modal.css"

const Modal = (props) => {
    const hello = <div>
        {props.children}
    </div>
    return (
        <div class = "Modal">
            {props.show ? hello : null}
        </div>

    )

    

    
}

export default Modal;