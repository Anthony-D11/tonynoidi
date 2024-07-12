import FeaturedCard from "../components/FeaturedCard/featuredcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/fontawesome/css/all.min.css';
import { faSearch, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

import $ from 'jquery';

class FavoriteMovies extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            keywords: "",
            movieList: [],
            favoriteMovieList: []
        
        };
        this.generateFavoriteMovies = this.generateFavoriteMovies.bind(this);
        this.discoverMovies = this.discoverMovies.bind(this);
        this.handleMovieKeywords = this.handleMovieKeywords.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        
    }

    componentDidMount() {
        this.generateFavoriteMovies();
    }
    componentDidUpdate() {
        const root = this;
        $(".favorite-icon").off("click");
        $(".favorite-icon").on("click", function() {
            let movieId = $(this).parent().attr("movie-id");
            let oldClass = $(this).attr("class");
            if (oldClass.indexOf("fa-regular") !== -1) {
                $(this).attr("class", "favorite-icon fa-solid fa-heart");
                root.addOrRemoveFavorite(movieId, true);
            } else if (oldClass.indexOf("fa-solid") !== -1) {
                $(this).attr("class", "favorite-icon fa-regular fa-heart");
                root.addOrRemoveFavorite(movieId, false);
            }
            
        });
    }

    async addOrRemoveFavorite(movie_id, add) {
        const url = "https://api.themoviedb.org/3/account/8916436/favorite";
        let body = JSON.stringify({
            media_type: "movie",
            media_id: movie_id,
            favorite: add
        });
        let response = await this.queryApi("POST", url, body);
        if (!("success" in response) || response["success"] !== true) {
            console.log(response["status_message"]);
        }
    }

    async queryApi(methodIn, urlIn, dataIn = null){
        let response;
        const headersIn = {
            "accept": "application/json",
            "content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTA4YmFlNzhhMDIxY2ZkZTgyMmUwNGM2ZmI5MjZmNCIsIm5iZiI6MTcxOTg1NzgyMS4xNDQ4ODcsInN1YiI6IjVkZmYzMjZkZDFhODkzMDAxMjg4ZTgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWjRTduhZhdO89uD2YJHtvGSxffnpaxR_A7iKTY8eWM"
        }

        await axios({
                url: urlIn, 
                method: methodIn,
                headers: headersIn,
                data: dataIn
            })
            .then(res => {
                response = res.data;
            }).catch(err => console.error("error:" + err));
        return response;
    }

    async generateMovies(data){
        let results = [];
        for (let i = 0; i < data["results"].length; i++) {
            let movie = data["results"][i];
            if(this.state.favoriteMovieList.indexOf(movie["id"]) !== -1) {
                movie["favorite"] = true;
            }
            else {
                movie["favorite"] = false;
            }
            results.push(
                <FeaturedCard TemplateName = "movie" CardTitle={movie["title"]} CardLink={""}
                                CardImage={"https://image.tmdb.org/t/p/w500" + movie["poster_path"]} Movie={movie}
                                />
            )
        }
        await this.setMovieList([]);
        this.setMovieList(results);
    }

    async searchMovies(event){
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?query=${this.state.keywords}&include_adult=false&language=en-US&page=1`;
        let data = await this.queryApi("GET", url);
        this.generateMovies(data);
    };

    async generateFavoriteMovies(){
        let done = false;
        const url = "https://api.themoviedb.org/3/account/8916436/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
        let data = await this.queryApi("GET", url);
        await this.setFavoriteMovieList(data);
        this.generateMovies(data);

    }

    async discoverMovies(){
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        let data = await this.queryApi("GET", url);
        this.generateMovies(data);
    }

    handleMovieKeywords(event) {
        this.setState(() => ({
            keywords: event.target.value
        }));
    }

    async setMovieList(movieListIn) {
        return new Promise((resolve, reject) => {
            this.setState({
                movieList: movieListIn
            }, () => {
                resolve("Done");
            });
            
        })
    }

    async setFavoriteMovieList(data) {
        return new Promise((resolve, reject) => {
            let favoriteMovieIdList = [];
            for (let i = 0; i < data["results"].length; i++) {
                let movie = data["results"][i];
                favoriteMovieIdList.push(movie["id"]);
            }
            this.setState({
                favoriteMovieList: favoriteMovieIdList
            }, () => {
                resolve("Done");
            });
            
        })
    }

    setDone(value) {
        this.setState(() => ({
            done: value
        }));
    }

    render() {
        return (
            <div className="section-section container">
                <div className="favorite-movies-header">
                    <div className="wrapper">
                        <h1 className="favorite-movies-title">Favorite Movies List</h1>
                        <div className="movie-search">
                            <form onSubmit={this.searchMovies}>
                                <div className="search-icon">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </div>
                                <input type="text"
                                    className="search-input"
                                    placeholder="Enter keywords..."
                                    value={this.state.keywords}
                                    onChange={this.handleMovieKeywords}
                                />
                                <button type="submit" className="btn btn-primary btn-primary-submit">
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </form>
                        </div>
                        <div className="selection-tab">
                            <button className="btn btn-group" onClick={this.generateFavoriteMovies}> My favorites </button>
                            <button className="btn btn-group" onClick={this.discoverMovies}> Discover </button>
                        </div>
                    </div>
                </div>
                <div className="favorite-movies-body">
                    <div id="movie-collection" className="movie-collection">
                        {this.state.movieList}
                    </div>
                </div>
            </div>
        )
    }
}
export default FavoriteMovies;