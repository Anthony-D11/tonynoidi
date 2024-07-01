import React from 'react'
import './featuredcard.css'

const FeaturedCard = ({CardTitle, CardLink, CardImage, OptionalClass}) => {
  return (
    <div className={`featured-card-view ${OptionalClass}`} >
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