import React from "react"
import Logo from "../Logo/Logo"
import NavigationItems from "../Navigation/NavigationItems/NavigationItems"
import ToggleButton from "../ToggleButton/ToggleButton"

import "./Toolbar.css"
const Toolbar = (props) => (
    <header className = "Toolbar">
        <div><ToggleButton clicked = {props.open} /></div>
        <div><Logo /></div>

        <nav>
           <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar; 