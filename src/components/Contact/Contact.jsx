import React from "react"


class Contact extends Component { 
    state = { 
        name: "", 
        email:"", 
        address:"", 
        phone:"",
    }
    render(){
        return (
            <div>
                <form>
                    <input type = "text" name = "name" placeholder = "enter your name"/>
                    <input type = "text" name = "email" placeholder = "enter your email"/>
                    <input type = "text" name = "address" placeholder = "enter your address"/>
                    <input type = "text" name = "phone" placeholder = "enter your phone"/>
                    <button type = "submit">submit</button>
                </form>
            </div>
        )
    }

}

export default Contact; 