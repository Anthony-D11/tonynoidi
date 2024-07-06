import FeaturedCard from "../components/FeaturedCard/featuredcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from 'react';

const FavoriteMovies = () => {

    const [keywords, setKeywords] = useState("");
    const [movieList, setMovieList] = useState([]);

    const queryApi = async (url) => {
        let response;
        const headers = {
            "accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTA4YmFlNzhhMDIxY2ZkZTgyMmUwNGM2ZmI5MjZmNCIsIm5iZiI6MTcxOTg1NzgyMS4xNDQ4ODcsInN1YiI6IjVkZmYzMjZkZDFhODkzMDAxMjg4ZTgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWjRTduhZhdO89uD2YJHtvGSxffnpaxR_A7iKTY8eWM"
        }

        await axios.get(url, {headers})
            .then(res => {
                response = res.data;
            }).catch(err => console.error("error:" + err));
        return response;
    };

    const generateMovies = (data) => {
        let results = [];
        for (let i = 0; i < data["results"].length; i++) {
            let movie = data["results"][i];
            results.push(
                <FeaturedCard CardTitle={movie["title"]} CardLink={""}
                                CardImage={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]}
                                OptionalClass={""}/>
            )
        }
        setMovieList(results);
    }


    const searchMovies = async(event) => {
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?query=${keywords}&include_adult=false&language=en-US&page=1`;
        let data = await queryApi(url);
        generateMovies(data);
    };

    const generateFavoriteMovies = async () => {
        const url = 'https://api.themoviedb.org/3/account/8916436/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
        let data = await queryApi(url);
        console.log(data);
        generateMovies(data);
    }
    const discoverMovies = async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        let data = await queryApi(url);
        console.log(data);
        generateMovies(data);
    }

    window.addEventListener("load", generateFavoriteMovies);

    return (
        <div className="section-section container">
            <div className="favorite-movies-header">
                <div className="wrapper">
                    <h1 className="favorite-movies-title">Favorite Movies List</h1>
                    <div className="movie-search">
                        <form onSubmit={searchMovies}>
                            <div className="search-icon">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <input type="text"
                                   className="search-input"
                                   placeholder="Enter keywords..."
                                   value={keywords}
                                   onChange={(e) => setKeywords(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary btn-primary-submit">
                                <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </form>
                    </div>
                    <div className="selection-tab">
                        <button className="btn btn-group" onClick={generateFavoriteMovies}> My favorites </button>
                        <button className="btn btn-group" onClick={discoverMovies}> Discover </button>
                    </div>
                </div>
            </div>
            <div className="favorite-movies-body">
                <div id="movie-collection" className="movie-collection">
                    {movieList}
                </div>
            </div>
        </div>
    )
}
export default FavoriteMovies;