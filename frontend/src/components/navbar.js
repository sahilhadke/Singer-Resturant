// https://codepen.io/afdallah/pen/ybBeZg
import React, { Component } from 'react'
import "./css/navbar.css"
class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container navbar-container">
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded={false}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">StartUp</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup={true} aria-expanded={false}>Explore <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/events">Events</a></li>
                                    <li><a href="/singers">Singers</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/">How It Works</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search Events By Location">
                            </input>
                            </div>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li id="login"><a href="/login">Login</a></li>
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle account" data-toggle="dropdown" role="button" aria-haspopup={true} aria-expanded={false}>Account <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/account-settings">Account Settings</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
