import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/Routes/GameTitles";
import SteamRatings from "./Components/Routes/SteamRatings";
import SalePrices from "./Components/Routes/SalePrices";
import Homepage from "./Components/Routes/Homepage";
import Nav from "./Components/Nav";
import OneGame from "./Components/OneGame";

function App() {
  const [games, setGames] = useState([]);
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
      {<Nav />}
      <Routes>
        <Route path="/" element={<Homepage games={games} />} />
        <Route path="/games">
          <Route index element={<GameTitles games={games} />} />
          <Route path=":id" element={<OneGame games={games} />} />
        </Route>
        <Route path="/ratings" element={<SteamRatings games={games} />} />
        <Route path="/saleprices" element={<SalePrices games={games} />} />
      </Routes>
    </>
  );
}

export default App;
