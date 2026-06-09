import { useState } from "react";
import "./App.css";
import GetMovie from "./GetMovie";
import AddMovie from "./AddMovie";
import SortMovies from "./SortMovies";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container">
      <div>
        <h1 className="test">Min filmlista</h1>
        <GetMovie />
        <hr />
        <AddMovie />
        <SortMovies />
      </div>
    </div>
  );
}

export default App;
