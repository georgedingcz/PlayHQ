import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GameTitles from "./GameTitles";
import SteamRatings from "./SteamRatings";
import SalePrices from "./SalePrices";

function App() {
  const [games, setGames] = useState();
  useEffect(() => {
    async function getGames() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`
      );
      const jsonData = await response.json();
      setGames(jsonData);
    }
    getGames();
  }, []);
  return (
    <>
      <h1>Welcome To PlayHQ</h1>
      <Routes>
        <Route path="/games" element={<GameTitles />} />
        <Route path="/ratings" element={<SteamRatings />} />
        <Route path="/saleprices" element={<SalePrices />} />
      </Routes>
      {/* <p>{JSON.stringify(games)}</p> */}
    </>
  );
}

export default App;
