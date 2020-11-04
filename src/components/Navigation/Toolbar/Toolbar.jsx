import React from "react"
import Logo from "../../Logo/Logo"

import "./Toolbar.css"
const Toolbar = (props) => (
    <header className = "Toolbar">
        <div>menu</div>
        <div><Logo /></div>

        <nav>
           <div class = "navigation">
               <div>hello</div>
               <div>about</div>
           </div>
        </nav>
    </header>
)

export default Toolbar; 