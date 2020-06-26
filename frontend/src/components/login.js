import React, { Component } from 'react'
import "./css/login.css"

class login extends Component {
    render() {
        return (
            <div>
                
                <div className="row">
                <div className="col-md-12">
                <form className="login-form" action="/" method="post">
                    <h1> Log In </h1>
                    
                    <fieldset>
                    
                    
                    <label for="email">Email:</label>
                    <input type="email" id="mail" name="user_email" required={true} placeholder="Enter Your Email"></input>
                
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required={true} placeholder="Enter Your Password"></input>

                    <p><a href="">Forgot Password?</a></p>

                    <p>Don't have an accout? <a href="/register">Create an Account</a></p>

                    </fieldset>
                
                    

                    <button className="submit-button" type="submit">Log In</button>
                    
                </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default login
