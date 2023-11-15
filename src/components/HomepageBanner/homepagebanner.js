import React from "react";
import './homepagebanner.css';
import linkedinConnect from '../../assets/linkedin.png'
import profilePicture from '../../assets/profile-picture.png'
import youtubeConnect from '../../assets/youtube.png'

function HomepageBanner() {
    return (
      <section className="section-section">
        <div id="intro" className="home-section container-fluid">
          <div className="home-content container">
            <div className="row">
              <div className="col-md-4">
                <h2 className="first-role"><strong>Developer</strong></h2>
                <h3 className="first-role-description">Software Developer from Vietnam</h3>
                <div className="linkedin-connect">
                  <img src={linkedinConnect} alt="linkedin" className="img-fluid social-connect"/>
                  <p>Let's Connect!</p>
                </div>
              </div>
              <div className="col-md-4">
                <img src={profilePicture} alt="profile-picture" className="img-fluid" />
              </div>
              <div className="col-md-4">
              <h2 className="first-role"><strong>Youtuber</strong></h2>
                <h3 className="first-role-description">I'm sharing my coding experience with my community</h3>
                <div className="linkedin-connect">
                  <img src={youtubeConnect} alt="linkedin" className="img-fluid social-connect"/>
                  <p>Let's Connect!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HomepageBanner;
  