/* eslint react/prop-types: 0 */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OneGame() {
  const [game, setGame] = useState({})
  const { id } = useParams();

  useEffect(() => {
    async function getGame() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?id=${id}`
      );
      const jsonData = await response.json();
      setGame(jsonData);
    }
    getGame();
  }, [id]);

  return (
    <>
      <h1>Game Details: {id}</h1>
      {/* {game.info.title} */}
      {JSON.stringify(game)}
      <br />
      <a href="/">
        <button>Go To Homepage</button>
      </a>
    </>
  );
}
