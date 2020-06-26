//https://codepen.io/gymratpacks/pen/VKzBEp

import React, { Component } from 'react'
import "./css/register.css"

class register extends Component {
    render() {
        return (
            <div>
                
                <div className="row">
                <div className="col-md-12">
                <form className="register-form"action="/" method="post">
                    <h1> Sign Up </h1>
                    
                    <fieldset>
                    
                    <legend><span className="number">1</span> Your Basic Info</legend>
                    
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" required={true} placeholder="Full Name"></input>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="mail" name="user_email" required={true} placeholder="Enter Your Email"></input>
                
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required={true} placeholder="Minimum 8 Characters"></input>

                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Minimum 8 Characters" required={true}></input>
                    
                    <label>Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Phone Number"></input>
                    
                    </fieldset>
                    <fieldset>  
                    
                    <legend><span className="number">2</span> Your Profile</legend>

                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" required={true} placeholder="Enter Your City"></input>

                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required={true} placeholder="Enter Your Age"></input>

                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender">
                        
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        
                    </select>

                    <label for="bio">Bio:</label>
                    <textarea id="bio" name="user_bio" placeholder="Minimum 20 characters. (Links to your social-media accounts)."></textarea>
                    
                
                
                    </fieldset>
                
                    <button className="submit-button" type="submit">Sign Up</button>
                    
                </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default register
