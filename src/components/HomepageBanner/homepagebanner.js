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
                <h2 className="role first-role"><strong>Youtuber</strong></h2>
                <h3 className="role-description">Dive into the World of Programming with Tony Nói Đi</h3>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3">
                <h2 className="role second-role"><strong>&lt;Coder/&gt;</strong></h2>
                <h3 className="role-description">Specializing in writing clean, elegant and creative code</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HomepageBanner;
  