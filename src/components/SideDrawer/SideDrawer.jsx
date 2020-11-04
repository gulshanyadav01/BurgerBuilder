import React from "react"

import Logo from "../Logo/Logo"
import NavigationItems from "../Navigation/NavigationItems/NavigationItems"

import "./SideDrawer.css"

const SideDrawer = (props) => {
    // .. do something 
    return (
        <div>
       {props.show ?  <div className = "SideDrawer">
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
        </div>:null
        }
        </div>
    );
}

export default SideDrawer; 