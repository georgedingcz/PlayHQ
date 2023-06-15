/* eslint react/prop-types: 0 */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OneGame({ unixTimeStamp }) {
  const [chosenGame, setChosenGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getGame() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?id=${id}`
      );
      const jsonData = await response.json();
      setChosenGame(jsonData);
    }
    getGame();
  }, [id]);

  return (
    <>
      <h1>{chosenGame?.info?.title}</h1>
      <br />
      <img width="300" src={chosenGame?.info?.thumb} />
      <br />
      Cheapest Price Ever: ${chosenGame?.cheapestPriceEver?.price}
      <br />
      Cheapest Price Date: {unixTimeStamp(chosenGame?.cheapestPriceEver?.date)}
      <br />
      Steam App ID: {chosenGame?.info?.steamAppID}
      <br />
      <br />
      <br />
      <a href="/">
        <button>Go To Homepage</button>
      </a>
    </>
  );
}
