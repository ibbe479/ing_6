import { useState } from "react";
import "./app.css";
import "./images/star.png";
import "./images/delete.png";
import GetMovie from "./GetMovie";

function AddMovie() {
  function saveMovie() {
    const movieList = document.getElementById("movies");
    const newMovie = document.createElement("li");
    newMovie.innerHTML = `${GetMovie.getTitleRaiting(title)} ${GetMovie.putStars(rating)} <img src='images/delete.png' alt='Delete' class='delete-btn'>`;
    movieList.appendChild(newMovie);
  }
  return <ul id="movies"></ul>;
}

export default AddMovie;
