import React, { Fragment } from "react"


const OrderSummary =  () => {
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
        </div>
        </React.Fragment>
    )
}

export default OrderSummary; 