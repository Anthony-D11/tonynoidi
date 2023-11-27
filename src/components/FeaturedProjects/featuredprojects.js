import React from 'react'
import FeaturedCard from '../FeaturedCard/featuredcard'
import './featuredprojects.css'
const FeaturedProjects = () => {
  return (
    <section className="section-section featured-projects-section">
        <div className="container">
            <div className="featured-projects-title">Some of my featured work</div>
            <div className="row">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProjects