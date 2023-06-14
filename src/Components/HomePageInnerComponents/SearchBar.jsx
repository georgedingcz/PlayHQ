import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ gameDetails, setGameDetails }) {
  const [searchGame, setSearchGame] = useState("");
  // const [gameDetails, setGameDetails] = useState([]);

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
      {/* <form onSubmit={handleSubmit}> */}
      Search Game:{" "}
      <input
        type="text"
        placeholder=""
        value={searchGame}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
      {/* </form> */}
      <Link to={`/search/${searchGame.toLowerCase().replace(" ", "")}`}>
        <button>Try</button>
      </Link>
    </div>
  );
}
