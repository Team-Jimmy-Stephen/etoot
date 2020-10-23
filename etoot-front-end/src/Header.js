import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo"
                    src="https://i.ibb.co/dGhtVsZ/Etoot-logo.jpg"
                />
            </Link>
   

            <div className="header__locations">
                <a class="nav-link" href="https://jimmyongresume.com/">Locations and Hours</a>
            </div>

            <div className="header__scheduleclass">
                <a class="nav-link" href="/app/schedule">Schedule Class</a>
            </div>

            <div className="header__contact">
                <a class="nav-link" href="mailto:contact@jimmyongresume.com">Contact</a>
            </div>

            <Link to='/login' >
                <div className="header__login">
                    <h3>Login</h3>
                </div>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

        </div>
    )
}

export default Header
