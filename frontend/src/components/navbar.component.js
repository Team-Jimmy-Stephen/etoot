import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./navbar.component.js"

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded"> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="https://jimmyongresume.com/" className="nav-link">Locations and Hours</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/appointment" className="nav-link" href="">Schedule Class</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="mailto:contact@jimmyongresume.com" className="nav-link" href="">Contact</Link>
                    </li>
                    </ul>
                </div>
                <div className="nav__right">
                    <ul className="navbar-nav mr-auto"> 
                    <li className="nav-login">
                        <Link to="/login" className="nav-link" href="">Login</Link>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
    
}