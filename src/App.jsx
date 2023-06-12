import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/Routes/GameTitles";
import SalePrices from "./Components/Routes/SalePrices";
import Homepage from "./Components/Routes/Homepage";
import Nav from "./Components/Nav";
import OneGame from "./Components/Routes/OneGame";
import NoGame from "./Components/Routes/NoGame";
import SteamRatings from "./Components/Routes/SteamRatings";

function App() {
  const [games, setGames] = useState([]);
  //retrieve game info
  useEffect(() => {
    async function getGames() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=2&upperPrice=50&pageNumber=50`
      );
      const jsonData = await response.json();
      setGames(jsonData);
    }
    getGames();
  }, []);
  //timestamp function
  const unixTimeStamp = (lastChange) => {
    const milliseconds = lastChange * 1000;
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {<Nav />}
      <Routes>
        <Route
          path="/"
          element={<Homepage games={games} unixTimeStamp={unixTimeStamp} />}
        />
        <Route path="/games">
          <Route index element={<GameTitles games={games} />} />
          <Route path=":id" element={<OneGame games={games} unixTimeStamp={unixTimeStamp}/>} />
          <Route path="*" element={<NoGame />} />
        </Route>
        <Route path="/ratings" element={<SteamRatings games={games} />} />
        <Route
          path="/saleprices"
          element={<SalePrices games={games} unixTimeStamp={unixTimeStamp} />}
        />
      </Routes>
    </>
  );
}

export default App;
