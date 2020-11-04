import React from "react"

import Logo from "../Logo/Logo"
import NavigationItems from "../Navigation/NavigationItems/NavigationItems"

import "./SideDrawer.css"

const SideDrawer = (props) => {
    // .. do something 
    return (
        <div className = "SideDrawer">
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
        </div>
    );
}

export default SideDrawer; 