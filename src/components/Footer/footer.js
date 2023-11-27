import React from 'react'
import Data from '../../assets/data.json';

const Facebook = Data["social"]["facebook"];
const Instagram = Data["social"]["instagram"];
const Youtube = Data["social"]["youtube"];
const Linkedin = Data["social"]["linkedin"];

var socialProfile = [Facebook, Instagram, Youtube, Linkedin];

const Footer = () => {

  let social = []
  for (let i = 0; i < 4; i++) {
    social.push(
      <li>
        <a href={socialProfile[i]["link"]} target="_blank">
          <i className={socialProfile[i]["fontawesome-class"]}></i>
        </a>
      </li>
    )
  }

  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <ul className="social-icon d-flex">{social}</ul>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer