import React from 'react'
import FeaturedCard from '../FeaturedCard/featuredcard'
import './featuredprojects.css'
import Data from '../../assets/data.json'

const FeaturedProjects = () => {
  var featureCardList = []
  for (let i = 0; i < Data["featured-projects"].length; i++) {
    let project = Data["featured-projects"][i];
    featureCardList.push(
      <FeaturedCard CardTitle={project["title"]} CardLink={project["link"]} CardImage={project["image"]} OptionalClass={"col-md-4"}/>
    )
  }
  return (
    <section className="section-section featured-projects-section">
        <div className="container">
            <div className="featured-projects-title">Some of my featured work</div>
            <div className="row">
                {featureCardList}
            </div>
        </div>
    </section>
  )
}

export default FeaturedProjects