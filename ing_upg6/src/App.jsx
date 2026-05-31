import { useState } from "react";
import "./App.css";
import GetMovie from "./GetMovie";
import AddMovie from "./AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="container">
      <div>
        <h1 className="test">Min filmlista</h1>
        <GetMovie movies={movies} setMovies={setMovies} />
        <hr />

        <h2>Filmer</h2>

        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;
