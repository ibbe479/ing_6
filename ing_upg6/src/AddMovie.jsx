import { useState } from "react";
import "./app.css";
import star from "./images/star.png";
import deleteMovieImg from "./images/delete.png";

function AddMovie() {
  const [movieList, setMoviesList] = useState(() =>
    JSON.parse(localStorage.getItem("movies")),
  );

  if (movieList.length === 0) {
    return <p>Du har inte lagt till några filmer än!</p>;
  }

  function renderaStjärnor(betyg) {
    const stjärnArray = [];
    for (let i = 0; i < Number(betyg); i++) {
      stjärnArray.push(
        <img key={i} src={star} alt="stjärna" className="bilder" />,
      );
    }
    return stjärnArray;
  }

  function deleteMovie(index) {
    const nyLista = [...movieList];
    nyLista.splice(index, 1);

    setMoviesList(nyLista);
    localStorage.setItem("movies", JSON.stringify(nyLista));
    window.location.reload();
  }
  return (
    <div>
      <h2>Filmer i din lista:</h2>
      <ul id="movies">
        {movieList.map((movie, index) => (
          <li key={index}>
            <span>
              {movie.title}

              <img
                src={deleteMovieImg}
                onClick={() => deleteMovie(index)}
                className="delete-movie-icon bilder"
              />

              {renderaStjärnor(movie.rating)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddMovie;
