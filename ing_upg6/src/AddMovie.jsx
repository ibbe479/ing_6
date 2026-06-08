import { useState } from "react";
import "./app.css";

function AddMovie() {
  const [movieList, setMoviesList] = useState(() =>
    JSON.parse(localStorage.getItem("movies")),
  );

  if (movieList.length === 0) {
    return <p>Du har inte lagt till några filmer än!</p>;
  }

  return (
    <div>
      <h2>Filmer i din lista:</h2>
      <ul>
        {movieList.map((movie, index) => (
          <li key={index}>
            {movie.title} - Betyg: {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddMovie;
