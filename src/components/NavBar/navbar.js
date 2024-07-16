import React, {useState, useEffect} from "react";
import './navbar.css';
import Data from '../../assets/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faLinkedin, faYoutube, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import {MdOutlineMenu, MdClose} from 'react-icons/md';

const Facebook = Data["social"]["facebook"];
const Instagram = Data["social"]["instagram"];
const Youtube = Data["social"]["youtube"];
const Linkedin = Data["social"]["linkedin"];

const FacebookIcon = faSquareFacebook;
const InstagramIcon = faInstagram;
const YoutubeIcon = faYoutube;
const LinkedinIcon = faLinkedin;

var socialProfile = [Facebook, Instagram, Youtube, Linkedin];
var socialIcon = [FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon];

const NavBar = () => {
    const[scrolled, setNavBar] = useState(false);
    
    window.addEventListener("scroll", (event) => {
        if (window.scrollY > 0) setNavBar(true);
        else setNavBar(false);
    });
                
    
    const [smallScreen, setSmall] = useState(false);
    const setSize = () => {
        if(window.innerWidth < 768) {
            setSmall(true);
        }
        else setSmall(false);
    };

    useEffect(() => {
        setSize();
    }, []);

    window.addEventListener("resize", setSize);

    const [isActive, setActive] = useState(false);

    let social = []
    for (let i = 0; i < 4; i++) {
      social.push(
        <li>
          <a href={socialProfile[i]["link"]} target="_blank" className={`social-link ${Object.keys(Data["social"])[i]}-link`}>
            <FontAwesomeIcon icon={socialIcon[i]} />
          </a>
        </li>
      )
    }

    return (
        <nav className={`navbar navbar-expand-md navbar-light fixed-top ${scrolled? 'scrolled': ''} ${isActive? 'dropdown': ''}`}>
            <div className="container">
                <a href="homepage" className="d-flex navbar-brand"><strong>Tony Nói Đi</strong></a>
                <div className="navbar-collapse collapse">
                    <div className="ms-auto navbar-nav">
                        <div className="nav-item">
                            <a href="homepage" className="nav-link"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                &nbsp;Home
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="favorite-movies" className="nav-link"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                &nbsp;Favorite Movies
                            </a>
                        </div>
                        <div className="nav-item">
                            <ul className="social-icon-list d-flex">{social}</ul>
                        </div>
                    </div>
                </div>
                <MdOutlineMenu className={`HamburgerMenu ${smallScreen? '': 'disabled'} ${isActive? 'disabled': ''}`} onClick={() => {setActive(!isActive)}}/>
                <MdClose className={`HamburgerMenu ${smallScreen? '': 'disabled'} ${isActive? '': 'disabled'}`} onClick={() => {setActive(!isActive)}}/>
                <div className={`mobile-nav ${smallScreen? '': 'disabled'} ${isActive? '': 'inactive'}`}>
                    <div className="nav-item">
                        <a href="homepage" className="nav-link"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            &nbsp;Home
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="favorite-movies" className="nav-link"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            &nbsp;Favorite Movies
                        </a>
                    </div>
                    <div className="nav-item">
                        <ul className="social-icon-list d-flex">{social}</ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;