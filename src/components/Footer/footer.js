import React from 'react'
import Data from '../../assets/data.json';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faYoutube, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-regular-svg-icons';

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

const Footer = () => {

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
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <ul className="social-icon-list d-flex">{social}</ul>
                </div>
                <div className="col-md-4 mail-container">
                  <a href="mailto:hungdao1152002@gmail.com" className="d-flex mail-link">
                    <span className="mail-icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                    <span className="mail-address">hungdao1152002@gmail.com</span>
                  </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer