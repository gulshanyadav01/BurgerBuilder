import React, { Component } from "react"
import Burger from "../../components/Burger/Burger"
import BuildControl from '../../components/Burger/BurgerControl/BuildControl' 

import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/Ordersummary/OrderSummary"

const   INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad: 0,
            meat: 0,
            cheese:0, 
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        openSideDrawer: false
    }

    addIngredientHandler = (type) => { 
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        // this is copy  
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdditon = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdditon;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients });
        console.log(this.state.totalPrice);
    }

    removeIngredientHandler = (type) => { 

        const oldCount = this.state.ingredients[type];
        if(oldCount<= 0){
            return;
        }
        const updatedCount = oldCount -1;
        // this is copy  
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice -  priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients });
        console.log(this.state.totalPrice);
    }


    purchasableHandler = () => { 
        this.setState({purchasable: true})
    }
    
    purchaseCancelHandler = () => { 
        this.setState({purchasable: false})
    }

    purchaseContinueHandler = () => { 
        alert("you can continue");
    }

    openSideDrawerHandler = () => { 
        this.setState({openSideDrawer: true})
    }


    render(){
            
        return (
            <React.Fragment>
          <Modal show = {this.state.purchasable} modelClosed = {this.purchaseCancelHandler}>
           <OrderSummary 
                cancelHandler  = {this.purchaseCancelHandler}
               continueHandler   = {this.purchaseContinueHandler}
               totalPrice = {this.state.totalPrice}
           />
            </Modal>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControl 
                ingredientAdded = {this.addIngredientHandler}
                ingredientDelete = {this.removeIngredientHandler}
                price = {this.state.totalPrice}
                purchase = {this.purchasableHandler}
            />
            </React.Fragment>

        )
    }
}

export default BurgerBuilder;