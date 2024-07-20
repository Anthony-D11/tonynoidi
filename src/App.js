import React from "react";
import './App.css';

import { 
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import FavoriteMovies from "./pages/FavoriteMovies";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/favorite-movies" element={<FavoriteMovies />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
