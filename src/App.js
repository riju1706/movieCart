import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./component/navbar/NavbarComp";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./page/movieDetails/MovieDetails";
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
