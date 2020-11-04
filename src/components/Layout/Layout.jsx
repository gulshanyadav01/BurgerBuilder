import React from "react"

const Layout = (props) => {
    return(
        <React.Fragment>
        <div>
            toolbar, sidedrawer, blackdrop
        </div>
        <main>
          {props.children}
         
        </main>
        </React.Fragment>
        
    )
}
export default Layout;