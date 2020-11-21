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
                        <Link to="/home" className="nav-link">Browse Tutors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link" href="">Services</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a href="https://jimmyjongs.com">Contact</a>  */}
                        <Link to="/" className="nav-link" href="https://jimmyjongs.com">Contact</Link>
                    </li>
                    </ul>
                </div>
                <div className="nav__right">
                    <ul className="navbar-nav mr-auto"> 
                    <li className="nav-login">
                        <Link to="/login" className="nav-link" href="">Login</Link>
                    </li>
                    <li className="nav-login">
                        <Link to="/register" className="nav-link" href="">Register</Link>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        )
    }
    
}