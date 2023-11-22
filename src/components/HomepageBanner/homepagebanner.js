import React from "react";
import './homepagebanner.css';
import linkedinConnect from '../../assets/linkedin.png'
import youtubeConnect from '../../assets/youtube.png'
import profilePicture from '../../assets/homepagebanner.png'

function HomepageBanner() {
    return (
      <section className="section-section homepage-banner-section">
        <div id="intro" className="home-section container-fluid">
          <div className="home-content container">
            <img src={profilePicture} className="homepage-banner-image center"/>
            <div className="row">
              <div className="col-md-3">
                <h2 className="role"><strong>Youtuber</strong></h2>
                <h3 className="role-description">Dive into the World of Programming with Tony Nói Đi</h3>
                <div className="linkedin-connect">
                  <img src={youtubeConnect} alt="linkedin" className="img-fluid social-connect"/>
                  <p>Let's Connect!</p>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3">
                <h2 className="role"><strong>&lt;Developer/&gt;</strong></h2>
                <h3 className="role-description">Developer who writes clean, elegant and creative code</h3>
                <div className="linkedin-connect">
                  <img src={linkedinConnect} alt="linkedin" className="img-fluid social-connect"/>
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
  