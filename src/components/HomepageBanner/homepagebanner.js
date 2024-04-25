import React from "react";
import './homepagebanner.css';
import profilePicture from '../../assets/homepagebanner.png';

function HomepageBanner() {
    return (
      <section className="section-section homepage-banner-section">
        <div id="intro" className="home-section container-fluid">
          <div className="home-content container">
            {/* <img src={profilePicture} className="homepage-banner-image center"/> */}
            <div className="row title-columns-lg">
              <div className="col-md-3  homepage-banner-title">
                <h2 className="role first-role"><strong>Youtuber</strong></h2>
                <h3 className="role-description">Dive into the World of Programming with Tony Nói Đi</h3>
              </div>
              <div className="col-md-6 homepage-banner-space"></div>
              <div className="col-md-3  homepage-banner-title">
                <h2 className="role second-role"><strong>&lt;Coder/&gt;</strong></h2>
                <h3 className="role-description">Specializing in writing clean, elegant and creative code</h3>
              </div>
            </div>
          </div>
          <div className="row title-columns-sm">
              <div className="col-md-6  homepage-banner-title">
                <h2 className="role first-role"><strong>Youtuber</strong></h2>
                <h3 className="role-description">Dive into the World of Programming with Tony Nói Đi</h3>
              </div>
              <div className="col-md-6  homepage-banner-title">
                <h2 className="role second-role"><strong>&lt;Coder/&gt;</strong></h2>
                <h3 className="role-description">Specializing in writing clean, elegant and creative code</h3>
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default HomepageBanner;
  