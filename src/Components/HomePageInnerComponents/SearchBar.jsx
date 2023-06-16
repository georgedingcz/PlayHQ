/* eslint react/prop-types: 0 */

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ setGameDetails }) {
  const [searchGame, setSearchGame] = useState("");

  const handleChange = (event) => {
    setSearchGame(event.target.value);
  };

  async function handleClick() {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${searchGame}&limit=60&exact=0`
    );
    const jsonData = await response.json();
    setGameDetails(jsonData);
  }
  return (
    <div>
      <br />
      Search Game:{" "}
      <input
        type="text"
        placeholder=""
        value={searchGame}
        onChange={handleChange}
      />
      <Link to={`/search/${searchGame.toLowerCase().replace(" ", "")}`}>
        <button onClick={handleClick}>Search</button>
      </Link>
    </div>
  );
}
