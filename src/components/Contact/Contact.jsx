import React, { Component } from "react"
import Input from "../../components/UI/Input/Input"

import "./Contact.css"
class Contact extends Component { 
    state = { 
        orderForm:{
            name:{
                elementType:"input", 
                elementConfig: {
                    type: "text", 
                    placeholder:" enter your name "
                },
                value: ""
            }, 
            email:{
                elementType:"input", 
                elementConfig: {
                    type: "email", 
                    placeholder:" enter your email "
                },
                value: ""
        }
        , 
            address:{
                street: {
                    elementType:"input", 
                    elementConfig: {
                        type: "text", 
                        placeholder:" street "
                    },
                    value: ""
                }, 
            postalCode: {
                elementType:"input", 
                elementConfig: {
                    type: "text", 
                    placeholder:" enter your Postal Code  "
                },
                value: ""
            }
        }, 
            phone:{
                elementType:"input", 
                elementConfig: {
                    type: "text", 
                    placeholder:" enter your name "
                },
                value: ""
        }
    }

    }
    inputChangedHandler = (event) => { 
        event.preventDefault(); 
        console.log(event.target.value);

    }

    render(){
        const formElementsArray = []; 
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        return (
            <div className ="Contact">
                <form  >
                    {/* <Input elementType = "..." elementConfig = "..." value = "..."/><br/> */}
                    {
                        formElementsArray.map((formElement) => (
                            <Input 
                                key = {formElement.id}
                                elementType = {formElement.config.elementType}
                                elementConfig = {formElement.config.elementConfig}
                                value = {formElement.config.value}
                                changed ={(event) => this.inputChangedHandler(event, idenfifier)}
                            />
                        ))
                    }
                   
                    <button type = "submit">submit</button>
                </form>
            </div>
        )
    }

}

export default Contact; 