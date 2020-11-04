import React from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"

import "./Layout.css"
const Layout = (props) => {
    return(
        <React.Fragment>
        <div className= "Content">
            {/* toolbar, sidedrawer, blackdrop */}
            <Toolbar/>
        </div>
        <main>
          {props.children}
         
        </main>
        </React.Fragment>
        
    )
}
export default Layout;