import React from "react"
import NavigationItem from "../NavigationItem/NavigationItem"

import "./NavigationItems.css"
const NavigationItems = () => (
    <ul className = "NavigationItems">
        <NavigationItem link = "/">BurgerBuilder</NavigationItem>
        <NavigationItem link = "/checkout">Checkout </NavigationItem>
        <NavigationItem link = "/contact">Contact </NavigationItem>
        
    </ul>
)

export default NavigationItems; 