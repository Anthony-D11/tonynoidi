import React from 'react'
import './experience.css';
import CIC from '../../assets/Canadian-Institute-for-Cybersecurity.png'
import Cvent from '../../assets/Cvent.png'
import Sonrai from '../../assets/Sonrai.png'

var cardColor = {
    "First": "#FFF8F8",
    "Second": "#F3F5FF",
    "Third": "#EBF8F8"
}

var yearsOfExperience = 2;

const Experience = () => {
  return (
    <section className="section-section">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="title">
                        <div className="years-count">0<span>{yearsOfExperience}</span></div>
                        <h2>Years Experience in Field</h2>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="card-style" style={{backgroundColor:cardColor.First}}>
                        <div className="company-logo-container">
                            <img src={CIC} alt="" className="company-logo"/>
                        </div>
                        <div className="position-title">
                            <h3>Security Application Developer Intern (2022), Fredericton, Canada</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-style" style={{backgroundColor:cardColor.Second}}>
                        <div className="company-logo-container">
                            <img src={Cvent} alt="" className="company-logo"/>
                        </div>
                        <div className="position-title">
                            <h3>Software Developer Intern (2022-2023), Fredericton, Canada</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-style" style={{backgroundColor:cardColor.Third}}>
                        <div className="company-logo-container">
                            <img src={Sonrai} alt="" className="company-logo"/>
                        </div>
                        <div className="position-title">
                            <h3>Junior Software Engineer Intern (2023), Fredericton, Canada</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience