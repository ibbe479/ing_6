import { useState } from "react";
import "./app.css";
import "./images/star.png";
import "./images/delete.png";

function GetMovie(e) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("0");

  function getTitleRaiting(e) {
    e.preventDefault();
    const title = document.getElementById("title-field").value;
    const rating = document.getElementById("rating-field").value;
    setTitle(title);
    setRating(rating);
    if (title === "") {
      window.alert("Du måste ange en titel för att kunna spara filmen");
      return false;
    }

    if (rating === "0") {
      window.alert("Du måste ange ett betyg för att kunna spara filmen");
      return false;
    }
    document.getElementById("title-field").value = "";
    document.getElementById("rating-field").value = "0";
    console.log(title, rating);
    return { title, rating };
  }

  function putStars(rating) {
    const numberStars = Number(rating);
    const newStars = "<img src='images/star.png' alt='Star'>".repeat(
      numberStars,
    );
    return newStars;
  }

  return (
    <form id="add-movie-form" onSubmit={getTitleRaiting}>
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
export default GetMovie;
