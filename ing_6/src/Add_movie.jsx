import { useState } from "react";
import "./app.css";

function Add_movie(e) {
  const [title, setTitle] = useState("");
  const [rating, setraitng] = useState(0);

  function handleTitle(e) {
    e.preventDefault();
    const title = document.getElementById("title-field").value;
    setTitle(title);
    console.log(title);
  }

  function handleRating() {
    e.preventDefault();
    const rating = document.getElementById("rating-field").value;
    setraitng(rating);
    console.log(rating);
  }

  return (
    <form id="add-movie-form" onSubmit={handleTitle} onSubmit={handleRating}>
      <fieldset>
        <legend>Lägg till en film</legend>

        <label for="title-field">Titel:</label>
        <input type="text" id="title-field" className="form-control" />

        <label for="rating-field">Betyg:</label>

        <select type="text" id="rating-field" className="form-control">
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
export default Add_movie;
