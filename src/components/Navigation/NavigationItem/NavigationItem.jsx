import React from "react"


import "./NavigationItem.css"
const NavigationItem = (props) => (
    <li>
        <a href = {props.link} >{props.children}</a>
    </li>
    
)

export default NavigationItem; 