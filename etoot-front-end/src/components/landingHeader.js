import React from "react"

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <br />
                <br />
                <br />
                <a className="navbar-brand brand" href="/">Etoot</a>
                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <a className="btn btn-outline-dark start" href="Home">Get Started</a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;