import HomepageBanner from "../components/HomepageBanner/homepagebanner";
import AboutMe from "../components/AboutMe/aboutme";
import Experience from "../components/Experience/experience";
import FeaturedProjects from "../components/FeaturedProjects/featuredprojects";



const HomePage = () => {
    return (
        <>
            <HomepageBanner />
            <FeaturedProjects />
            <Experience />
            <AboutMe />
        </>
    )
}
export default HomePage;