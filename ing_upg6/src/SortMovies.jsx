import { useState } from "react";
import "./app.css";

function SortMovies() {
  const [movieList, setMoviesList] = useState(() =>
    JSON.parse(localStorage.getItem("movies")),
  );

  function sortByRaitng() {
    const sortedByRating = [...movieList].sort((a, b) => b.rating - a.rating);
    setMoviesList(sortedByRating);
    localStorage.setItem("movies", JSON.stringify(sortedByRating));
    window.location.reload();
  }

  function sortByTitle() {
    const sortedByTitle = [...movieList].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setMoviesList(sortedByTitle);
    localStorage.setItem("movies", JSON.stringify(sortedByTitle));
    window.location.reload();
  }
  return (
    <div className="m-3">
      <button onClick={sortByRaitng} className="btn btn-outline-primary me-2">
        Sortera efter Betyg
      </button>
      <button onClick={sortByTitle} className="btn btn-outline-primary ">
        Sortera efter Titeln
      </button>
    </div>
  );
}

export default SortMovies;
