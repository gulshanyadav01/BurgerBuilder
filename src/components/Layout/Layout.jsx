import React, { useState } from "react"
import Toolbar from "../Toolbar/Toolbar"
import Sidedrawer from "../SideDrawer/SideDrawer"

import "./Layout.css"
const Layout = (props) => {
    const [sideDrawer, setSideDrawer] = useState(false);
    const [showSideDrawer, setShowSideDrawer] = useState(false);

   const  openSideDrawerHandler = () => { 
        // setSideDrawer(true); 
        setShowSideDrawer(true);
    }

//    const showSideDrawerHandler = () => { 

//    }

    return(
        <React.Fragment>
        <div className= "Content">
            {/* toolbar, sidedrawer, blackdrop */}
            <Toolbar open = {openSideDrawerHandler}/>
             <Sidedrawer show = {showSideDrawer}/>
        </div>
        <main>
          {props.children}
         
        </main>
        </React.Fragment>
        
    )
}
export default Layout;