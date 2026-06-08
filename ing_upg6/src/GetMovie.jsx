import { useState } from "react";
import "./app.css";

function GetMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");
  const [movieList, setMoviesList] = useState(() => {
    const movies = localStorage.getItem("movies");
    if (movies) {
      return JSON.parse(movies);
    } else {
      localStorage.setItem("movies", JSON.stringify([]));
      return [];
    }
  });

  function getTitleRaiting(e) {
    e.preventDefault();

    if (title === "") {
      alert("Du måste ange en titel!");
      return;
    }
    if (rating === "0") {
      alert("Du måste välja ett betyg!");
      return;
    }

    const newMovie = { title: title, rating: rating };
    const updatedMovies = [...movieList, newMovie];

    setMoviesList(updatedMovies);

    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    setRating("0");
    setTitle("");

    window.location.reload();
  }

  return (
    <form id="add-movie-form" onSubmit={getTitleRaiting}>
      <fieldset>
        <legend>Lägg till en film</legend>

        <label>Titel:</label>
        <input
          type="text"
          id="title-field"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Betyg:</label>
        <select
          id="rating-field"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit" className="btn btn-success mt-3">
          Spara film
        </button>
      </fieldset>
    </form>
  );
}
export default GetMovie;
