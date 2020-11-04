import React from "react"
import Toolbar from "../Toolbar/Toolbar"
import Sidedrawer from "../SideDrawer/SideDrawer"

import "./Layout.css"
const Layout = (props) => {
    return(
        <React.Fragment>
        <div className= "Content">
            {/* toolbar, sidedrawer, blackdrop */}
            <Toolbar/>
            <Sidedrawer/>
        </div>
        <main>
          {props.children}
         
        </main>
        </React.Fragment>
        
    )
}
export default Layout;