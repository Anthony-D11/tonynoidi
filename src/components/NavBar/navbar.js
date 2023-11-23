import React, {useState} from "react";
import './navbar.css';
import {Link} from 'react-scroll';

const NavBar = () => {
    const[scrolled, setNavBar] = useState(false);

    const isScrolled = () => {
        const App = document.getElementById("App");
        if (App) {
            App.addEventListener("scroll", (event) => {
                if (event.target.scrollTop > 0) setNavBar(true);
                else setNavBar(false);
            });

        }
    }
    window.addEventListener("load", isScrolled);

    return (
        <nav className={`navbar navbar-expand-md navbar-light fixed-top ${scrolled? 'scrolled': ''}`}>
            <div className="container">
                <a href="/" className="d-flex navbar-brand"><strong>Tony Nói Đi</strong></a>
                <div className="navbar-collapse collapse">
                    <div className="ms-auto navbar-nav">
                        <div className="nav-item">
                            <a href="/" className="nav-link"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                &nbsp;Home
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="/" className="nav-link"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                &nbsp;My Favorites
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;