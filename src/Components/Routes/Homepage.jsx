/* eslint react/prop-types: 0 */

import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";
import { useState, useEffect } from "react";

export default function Homepage({ games }) {
  const [gameStores, setGameStores] = useState([]);
  useEffect(() => {
    async function getGameStores() {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
      const jsonData = await response.json();
      setGameStores(jsonData);
    }
    getGameStores();
  }, []);
  const sortedGameStore = gameStores.toSorted((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <label>Choose an online game store:</label>
      <select name="stores" id="store-select">
        {sortedGameStore.map((store) => (
          <option key={store.storeID} value={store.storeName}>
            {store.storeName}
          </option>
        ))}
      </select>
      <h1>Welcome To PlayHQ</h1>
      {/* <p>{JSON.stringify(games)}</p> */}
      <CheapGamesGroup games={games} />
      <TopRatedGamesGroup games={games} />

      <br />
      <h1>Most Recent Games</h1>
    </>
  );
}
