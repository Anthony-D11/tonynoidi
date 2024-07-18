import React from 'react'
import './featuredcard.css'
import '../../assets/fontawesome/css/all.min.css';

const FeaturedCard = ({TemplateName, CardTitle, CardLink, CardImage, OptionalClass = "", Movie = {}}) => {
  console.log(CardLink);
  return (
    <div className={`featured-card-view ${OptionalClass}`} >
        <div className="featured-card-container mx-auto card">
          <div className="featured-card-image-container">
            <img src={CardImage} alt="" className="featured-card-image" />
          </div>
          <div className="featured-card-title-container">
            <h5 className="featured-card-title">{CardTitle}</h5>
          </div>
          {TemplateName === "movie" ? 
            <div className="sub-movie-section">
              {Object.keys(Movie).length !== 0 ?
                <div className="movie-info">
                  <div className="movie-release-year">
                    {Movie["release_date"].substring(0,4)}
                  </div>
                  <div className="dot"></div>
                  <div className="movie-rating">
                    {Movie["vote_average"].toFixed(1)}
                  </div>
                </div> : <></>
              }
              <div className="movie-tools" movie-id= {Movie["id"]}>
                { Movie["favorite"] === true ?
                  <i className="favorite-icon fa-solid fa-heart"></i> :
                  <i className="favorite-icon fa-regular fa-heart"></i>

                }
              </div>
            </div> : <></>
          }
        </div>
    </div>
  )
}

export default FeaturedCard