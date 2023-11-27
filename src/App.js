import React from "react";
import './App.css';

import NavBar from "./components/NavBar/navbar"
import HomepageBanner from "./components/HomepageBanner/homepagebanner";
import AboutMe from "./components/AboutMe/aboutme";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import FeaturedProjects from "./components/FeaturedProjects/featuredprojects";

function App() {
  return (
    <div id="App" className="App" >
      <NavBar/>
      <HomepageBanner/>
      <FeaturedProjects/>
      <Experience/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
