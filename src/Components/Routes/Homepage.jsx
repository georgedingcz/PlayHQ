/* eslint react/prop-types: 0 */

import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import RecentGames from "../HomePageInnerComponents/RecentGames";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";
import { useState, useEffect } from "react";

export default function Homepage({ games, unixTimeStamp }) {
  //choose and get game store data
  const [gameStores, setGameStores] = useState([]);
  useEffect(() => {
    async function getGameStores() {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
      const jsonData = await response.json();
      setGameStores(jsonData);
    }
    getGameStores();
  }, []);

  return (
    <>
      <h1>Welcome To PlayHQ</h1>

      <CheapGamesGroup games={games} />
      <TopRatedGamesGroup games={games} />
      <RecentGames games={games} unixTimeStamp={unixTimeStamp} />
    </>
  );
}
