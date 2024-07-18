import React from 'react'
import './aboutme.css'
import Data from '../../assets/data.json';
import profilePicture from '../../assets/about_me.png';

let introEN = Data['about-me-en'];


const AboutMe = () => {
  return (
   <section className="section-section">
    <div id="about-me" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="d-flex col-md-6 order-md-last aboutme-container">
                    <div className="aboutme ms-auto">
                        <div className="aboutme-title">
                            <div className="aboutme-subtitle">About Me</div>
                            <h2>Hello!</h2>
                        </div>
                        <div className="introduction">{introEN}</div>
                    </div>
                </div>
                <div className="col-md-6 profile-picture-container">
                    <img src={profilePicture} alt="about-me" className="profile-picture"/>
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default AboutMe