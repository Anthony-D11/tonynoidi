import NavBar from "./components/NavBar/navbar"
import HomepageBanner from "./components/HomepageBanner/homepagebanner";
import AboutMe from "./components/AboutMe/aboutme";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App" >
      <NavBar/>
      <HomepageBanner/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
