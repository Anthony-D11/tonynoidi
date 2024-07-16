import FeaturedCard from "../components/FeaturedCard/featuredcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/fontawesome/css/all.min.css';
import { faSearch, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

import $ from 'jquery';
let defaultPoster = require('../assets/default_movie_poster.jpeg');

class FavoriteMovies extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            keywords: "",
            movieList: [],
            favoriteMovieList: [],
            mode: ""
        };
        this.generateFavoriteMovies = this.generateFavoriteMovies.bind(this);
        this.discoverMovies = this.discoverMovies.bind(this);
        this.handleMovieKeywords = this.handleMovieKeywords.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.setMode = this.setMode.bind(this);
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
    constructUrl(rootUrl, queryParameters={}, pathParameters={}) {
        for (let [key, value] of Object.entries(pathParameters)) {
            rootUrl = rootUrl.replace(key, value);
        }
        Object.entries(queryParameters).forEach(([key, value], index) => {
            rootUrl = rootUrl + (index === 0 ? "?" : "&") + `${key}=${value}`;
        });

        return rootUrl;
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
                                CardImage={movie["poster_path"] !== null ? "https://image.tmdb.org/t/p/w500" + movie["poster_path"] : defaultPoster} Movie={movie}
                                />
            )
        }
        await this.setMovieList([]);
        this.setMovieList(results);
    }

    async searchMovies(event){
        let requestedPage = 1;

        if (typeof event !== "number") {
            event.preventDefault();
        }
        else {
            requestedPage = event;
        }
        $(".favorite-movies-header .selection-tab button").removeClass("active");
        this.setMode("search");
        const rootUrl = "https://api.themoviedb.org/3/search/movie";

        let queryParameters = {
            query: this.state.keywords,
            language: "en-US",
            page: requestedPage
        };
        let url = this.constructUrl(rootUrl, queryParameters);
        let requestedData = await this.queryApi("GET", url);
        this.showPagination(requestedPage, Math.min(requestedData["total_pages"], 500));
        this.generateMovies(requestedData);
    };

    async generateFavoriteMovies(requestedPage = 1){
        $(".favorite-movies-header .selection-tab button").removeClass("active");
        $(".favorite-movies-header .selection-tab .favorite-movies").addClass("active");
        this.setMode("favorite");
        const rootUrl = "https://api.themoviedb.org/3/account/account_id/favorite/movies";
        let pathParameters = {
            account_id: 8916436
        };
        let currentPage = 1;
        let queryParameters = {
            language: "en-US",
            page: currentPage,
            sort_by: "created_at.asc"
        };
        let done = false;
        let url = "";
        let allData = {
            "results": []
        }
        let requestedData;
        if (typeof requestedPage !== "number") {
            requestedPage = parseInt(requestedPage.target.getAttribute("data-page"));
        }
        while (!done) {
            queryParameters.page = currentPage;
            url = this.constructUrl(rootUrl, queryParameters, pathParameters);
            let data = await this.queryApi("GET", url);
            allData["results"] = allData["results"].concat(data["results"]);
            if (data["page"] === requestedPage) {
                requestedData = data;
            }
            if (currentPage >= data["total_pages"]) {
                done = true;
            }
            currentPage++;
        }
        this.showPagination(requestedPage, Math.min(requestedData["total_pages"], 500));
        await this.setFavoriteMovieList(allData);
        this.generateMovies(requestedData);
    }

    async discoverMovies(requestedPage = 1){
        $(".favorite-movies-header .selection-tab button").removeClass("active");
        $(".favorite-movies-header .selection-tab .discover-movies").addClass("active");
        this.setMode("discover");
        const rootUrl = "https://api.themoviedb.org/3/discover/movie";
        if (typeof requestedPage !== "number") {
            requestedPage = parseInt(requestedPage.target.getAttribute("data-page"));
        }
        let queryParameters = {
            language: "en-US",
            page: requestedPage,
            sort_by: "popularity.desc"
        };
        let url = "";
        url = this.constructUrl(rootUrl ,queryParameters);
        let requestedData = await this.queryApi("GET", url);
        this.showPagination(requestedPage, Math.min(requestedData["total_pages"], 500));
        this.generateMovies(requestedData);
    }

    showPagination(currentPage, totalPages) {
        let executionMethod;
        if (this.state.mode === "favorite") {
            executionMethod = this.generateFavoriteMovies;
        }
        else if (this.state.mode === "discover") {
            executionMethod = this.discoverMovies;
        }
        else if (this.state.mode === "search") {
            executionMethod = this.searchMovies;
        }
        $(".pagination").empty();
        for (let page = Math.max(currentPage - 2, 1); page <= Math.min(currentPage + 2, totalPages); page++) {
            if (page === currentPage) {
                $(".pagination").append(`<div class="page-item active" data-page="${page}">${page}</div>`);
            }
            else {
                $(".pagination").append(`<div class="page-item" data-page="${page}">${page}</div>`);
            }
        }
        $(".pagination").prepend(`<div class='page-item' data-page="1">«</div><div class='page-item' data-page="${Math.max(currentPage - 1, 1)}">←</div>`);
        $(".pagination").append(`<div class='page-item' data-page="${Math.min(currentPage + 1, totalPages)}">→</div><div class='page-item' data-page="${totalPages}">»</div>`);
        $(".pagination .page-item").on("click", function () {
            executionMethod(parseInt($(this).attr("data-page")));
        });
    }


    handleMovieKeywords(event) {
        this.setState(() => ({
            keywords: event.target.value
        }));
    }

    setMode(modeIn) {
        this.setState(() => ({
            mode: modeIn
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
                            <button className="btn btn-group favorite-movies" data-page="1"
                                    onClick={this.generateFavoriteMovies}> My favorites
                            </button>
                            <button className="btn btn-group discover-movies" data-page="1"
                                    onClick={this.discoverMovies}> Discover
                            </button>
                        </div>
                        <div className="pagination">
                        </div>
                    </div>
                </div>
                <div className="favorite-movies-body">
                    <div id="movie-collection" className="movie-collection">
                        {this.state.movieList}
                    </div>
                </div>
                <div className="favorite-movies-footer">
                    <div className="pagination">
                    </div>
                </div>
            </div>
        )
    }
}
export default FavoriteMovies;