import React from "react"
import NavigationItems from "../NavigationItems/NavigationItems"

import "./NavigationItem.css"
const NavigationItem = (props) => (
    <li>
        <a href = {props.link} >{props.children}</a>
    </li>
    
)

export default NavigationItem; 