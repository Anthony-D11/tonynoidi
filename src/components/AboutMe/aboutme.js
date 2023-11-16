import React from 'react'
import './aboutme.css'
import Data from '../../assets/data.json';

var introVN = Data['about-me-vn'];
var introEN = Data['about-me-en'];
var profilePciture = Data['profile-picture']

const AboutMe = () => {
  return (
   <section className="section-section">
    <div id="aboutme" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="d-flex col-md-6 order-md-last about-me-container">
                    <div className="about-me ms-auto">
                        <div className="title">
                            <div className="subtitle">About Me</div>
                            <h2>Hello!</h2>
                        </div>
                        <div className="introduction">{introEN}</div>
                    </div>
                </div>
                <div className="col-md-6 profile-picture-container">
                    <img src={profilePciture} alt="about-me" className="profile-picture"/>
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default AboutMe