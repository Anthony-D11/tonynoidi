import React from 'react'
import './experience.css';
import Data from '../../assets/data.json';

const workExperience = Data["work-experience"];
var yearsOfExperience = Data["years-experience"];


const cardColor = ["#FFF8F8", "#F3F5FF", "#EBF8F8"];


const Experience = () => {
    let work = [];
    for (let i = 2; i >= 0; i--) {
        work.push(
            <div className="col-md-3">
                <div className="card-style" style={{backgroundColor:cardColor[i]}}>
                    <div className="company-logo-container">
                        <img src={workExperience[i].logo} alt="" className="company-logo"/>
                    </div>
                    <div className="position-title">
                        <h3>{workExperience[i].position} ({workExperience[i].period}), {workExperience[i].city}, {workExperience[i].country}</h3>
                    </div>
                </div>
            </div>
        )
    }

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
                {work}
            </div>
        </div>
    </section>
  )
}

export default Experience