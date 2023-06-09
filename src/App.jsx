import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/GameTitles";
import SteamRatings from "./Components/SteamRatings";
import SalePrices from "./Components/SalePrices";
import Homepage from "./Components/Homepage";
import Nav from "./Components/Nav"
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
    {<Nav/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games" element={<GameTitles games={games}/>} >
          <Route path=":id" element={<OneGame/>}/>
        </Route>
        <Route path="/ratings" element={<SteamRatings games={games}/>} />
        <Route path="/saleprices" element={<SalePrices games={games}/>} />
      </Routes>
    </>
  );
}

export default App;
