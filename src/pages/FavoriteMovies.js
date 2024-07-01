import FeaturedCard from "../components/FeaturedCard/featuredcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const FavoriteMovies = () => {
    var featureCardList = []
    for (let i = 0; i < 10; i++) {
        //let project = Data["featured-projects"][i];
        featureCardList.push(
        <FeaturedCard CardTitle={"Hello World"} CardLink={""} CardImage={"https://img.myflixerz.to/xxrz/250x400/201/e8/ad/e8ad60dd67c5bc3f2f133058d0b16dc9/e8ad60dd67c5bc3f2f133058d0b16dc9.jpg"} OptionalClass={""}/>
        )
    }
    return (
        <div className="section-section container">
            <div className="favorite-movies-header">
                <div className="wrapper">
                    <h1 className="favorite-movies-title">Favorite Movies List</h1>
                    <div className="movie-search">
                        <form>
                            <div className="search-icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input type="text" className="search-input" id="query" placeholder="Enter keywords..." onSubmit={() => {console.log("hello")}}/>
                            <button className="btn btn-primary btn-primary-submit">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="favorite-movies-body">
                <div className="movies-collection">
                    {featureCardList}
                </div>
            </div>
        </div>
    )
}
export default FavoriteMovies;