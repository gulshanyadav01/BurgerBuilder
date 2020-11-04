import React from "react"
import Control from "../BurgerControl/Control/Control"

import "./BuildControl.css"

const Controls = [ 
    {label:"Salad", type: "salad"},
    {label:"Bacon", type: "bacon"},
    {label:"Meat", type: "meat"},
    {label:"Cheese", type: "cheese"}
];

const BuildControl = (props) => (
    <div className = "BuildControl">
    <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {
            Controls.map((item) => {
                return <Control
                    key = {item.label} 
                    ingredientAdd = {() => props.ingredientAdded(item.type)}
                    ingredientDel = {() => props.ingredientDelete(item.type)}
                    label = {item.label}/>
            })
        }
        <button className = "button1" onClick = {props.purchase}> Order Now</button>
    </div>
);
export default BuildControl;