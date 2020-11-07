import React, { Component } from "react"
import Input from "../../components/UI/Input/Input"

import "./Contact.css"
class Contact extends Component { 
    state = { 
        name: "", 
        email:"", 
        address:"", 
        phone:"",
    }

    orderHanlder  = (event) => { 
        event.preventDefault(); 
        console.log("")

    }

    render(){
        return (
            <div className ="Contact">
                <form  >
                    <Input inputtype = "input" type = "text" name = "name" placeholder = "enter your name"/><br/>
                    <Input inputtype = "input" type = "text" name = "email" placeholder = "enter your email"/><br/>
                    <Input inputtype = "input" type = "text" name = "address" placeholder = "enter your address"/><br/>
                    <Input inputtype = "input" type = "text" name = "phone" placeholder = "enter your phone"/><br/>
                    <button type = "submit">submit</button>
                </form>
            </div>
        )
    }

}

export default Contact; 