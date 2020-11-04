import React, { Fragment } from "react"
import Button from "../../UI/Button/Button"

const OrderSummary =  (props) => {
    return(
        <React.Fragment>
        <div>
            <h3>Your Order </h3>
            <p>A delicious burger with the following ingredients </p>
            
            <ul>
                <li>Cheese: </li>
                <li>Meat: </li>
                <li>Bacon:</li>
                <li>Salad:</li>
            </ul>
            <h3>Total Price: {props.totalPrice.toFixed(2)}</h3>
            <p>continue to checkout </p>
            <Button clicked = {props.cancelHandler}>Cancel</Button>
            <Button clicked = {props.continueHandler}>Continue</Button>
        </div>
        </React.Fragment>
    )
}

export default OrderSummary; 