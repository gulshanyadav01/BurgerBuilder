import React from "react"
import Images from "../../assets/images/burger-logo.png"

const Logo = () => { 
    return (
        <div>
            <img  src = {Images} alt = "logo" style = {{width: "72px", height: "70"}}/>
        </div>
    )
}

export default Logo; 