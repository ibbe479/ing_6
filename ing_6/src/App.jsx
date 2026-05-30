import { useState } from "react";
import "./App.css";
import Add_movie from "./Add_movie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <h1 className="test">Min filmlista</h1>
        <Add_movie />
        <hr />

        <h2>Filmer</h2>

        <ul id="movies">
          <li>hej</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
