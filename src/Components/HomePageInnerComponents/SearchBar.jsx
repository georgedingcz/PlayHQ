import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchGame, setSearchGame] = useState("");
  const [gameDetails, setGameDetails] = useState([]);

  const handleChange = (event) => {
    setSearchGame(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${searchGame}&limit=60&exact=0`
    );
    const data = await response.json();
    if (data) {
      setGameDetails(data);
    } else {
      console.error("Error:");
    }
  };

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        Search Game:{" "}
        <input
          type="text"
          placeholder=""
          value={searchGame}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {gameDetails.map((gameDetail) => (
        <li key={gameDetail.gameID}>
          <br />
          <br />
          {gameDetail.external}
          <br />
          Cheapest Price: {gameDetail.cheapest}
          <br />
          <Link to={`/games/${gameDetail.gameID}`}>
            <img width="300" src={gameDetail.thumb} />
          </Link>{" "}
          <br />
          <br />
        </li>
      ))}
    </div>
  );
}
