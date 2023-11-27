import React from 'react'
import './featuredcard.css'
import CardImage from '../../assets/card-image.png'

const CardTitle = "Apache Spark Blogs";
const CardLink = "google.com"

const FeaturedCard = () => {
  return (
    <div className="featured-card-view col-md-4" >
        <a href={CardLink} className="featured-card-link">
            <div className="featured-card-container mx-auto card">
                <img src={CardImage} alt="" className="featured-card-image" />
                <h5 className="featured-card-title">{CardTitle}</h5>
            </div>
        </a>
    </div>
  )
}

export default FeaturedCard