/* eslint react/prop-types: 0 */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OneGame({ games, unixTimeStamp }) {
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

  const game = games.find((game) => game.gameID === id);

  return (
    <>
      <h1>Game: {chosenGame?.info?.title}</h1>
      <br />
      Current Price: ${game?.salePrice}
      <br />
      Current Price Since: {unixTimeStamp(game?.lastChange)}
      <br/>
      <br/>
      Cheapest Price Ever: ${chosenGame?.cheapestPriceEver?.price}
      <br />
      Cheapest Price Date: {unixTimeStamp(chosenGame?.cheapestPriceEver?.date)}
      <br />
      <img width="300" src={chosenGame?.info?.thumb} />
      <br />
      {/* {JSON.stringify(deals)} */}
      {/* {deals.map((deal) => (
        <ol key={deal.storeID}>{deal.storeID}</ol>
      ))} */}
      <br />
      <br />
      <a href="/">
        <button>Go To Homepage</button>
      </a>
    </>
  );
}
