import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/Routes/GameTitles";
import SalePrices from "./Components/Routes/SalePrices";
import Homepage from "./Components/Routes/Homepage";
import Nav from "./Components/Nav";
import OneGame from "./Components/Routes/OneGame";
import NoGame from "./Components/Routes/NoGame";
import SteamRatings from "./Components/Routes/MetacriticRatings";
import ReleaseDate from "./Components/Routes/ReleaseDate";

function App() {
  const [gamesByName, setGamesByName] = useState([]);
  const [gamesByMetacritic, setGamesByMetacritic] = useState([]);
  const [gamesByPrice, setGamesByPrice] = useState([]);
  const [gamesByReleaseDate, setGamesByReleaseDate] = useState([]);

  const [titlePageNumber, setTitlePageNumber] = useState(1);
  const [titleStoreNumber, setTitleStoreNumber] = useState(1);

  const [metacriticPageNumber, setMetacriticPageNumber] = useState(1);
  const [metacriticStoreNumber, setMetacriticStoreNumber] = useState(1);

  const [pricePageNumber, setPricePageNumber] = useState(1);
  const [priceStoreNumber, setPriceStoreNumber] = useState(1);

  const [releasePageNumber, setReleasePageNumber] = useState(1);
  const [releaseStoreNumber, setReleaseStoreNumber] = useState(1);

  //retrieve games by store
  useEffect(() => {
    async function getGamesByName() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${titleStoreNumber}&upperPrice=50&pageNumber=${titlePageNumber}&sortBy=Title`
      );
      const jsonData = await response.json();
      setGamesByName(jsonData);
    }
    getGamesByName();
  }, [titleStoreNumber, titlePageNumber]);

  //retrieve games by metacritic score
  useEffect(() => {
    async function getGamesByMetacritic() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${metacriticStoreNumber}&upperPrice=50&pageNumber=${metacriticPageNumber}&sortBy=Metacritic`
      );
      const jsonData = await response.json();
      setGamesByMetacritic(jsonData);
    }
    getGamesByMetacritic();
  }, [metacriticStoreNumber, metacriticPageNumber]);

  //retrieve games by price
  useEffect(() => {
    async function getGamesByPrice() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${priceStoreNumber}&upperPrice=50&pageNumber=${pricePageNumber}&sortBy=Price`
      );
      const jsonData = await response.json();
      setGamesByPrice(jsonData);
    }
    getGamesByPrice();
  }, [priceStoreNumber, pricePageNumber]);

  //retrieve games by release date
  useEffect(() => {
    async function getGamesByReleaseDate() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${releaseStoreNumber}&upperPrice=50&pageNumber=${releasePageNumber}&sortBy=Release`
      );
      const jsonData = await response.json();
      setGamesByReleaseDate(jsonData);
    }
    getGamesByReleaseDate();
  }, [releaseStoreNumber, releasePageNumber]);

  //timestamp function (solution found online)
  const unixTimeStamp = (lastChange) => {
    const milliseconds = lastChange * 1000;
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
    
      {<Nav />}
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              gamesByMetacritic={gamesByMetacritic}
              gamesByPrice={gamesByPrice}
              gamesByReleaseDate={gamesByReleaseDate}
              unixTimeStamp={unixTimeStamp}
            />
          }
        />
        <Route path="/games">
          <Route
            index
            element={
              <GameTitles
                gamesByName={gamesByName}
                setPageNumber={setTitlePageNumber}
                pageNumber={titlePageNumber}
                setStoreNumber={setTitleStoreNumber}
                storeNumber={titleStoreNumber}
              />
            }
          />
          <Route
            path=":id"
            element={
              <OneGame
                games={gamesByName}
                unixTimeStamp={unixTimeStamp}
                setPageNumber={setTitlePageNumber}
                setStoreNumber={setTitleStoreNumber}
              />
            }
          />
          <Route path="*" element={<NoGame />} />
        </Route>
        <Route
          path="/ratings"
          element={
            <SteamRatings
              gamesByMetacritic={gamesByMetacritic}
              setPageNumber={setMetacriticPageNumber}
              pageNumber={metacriticPageNumber}
              setStoreNumber={setMetacriticStoreNumber}
              storeNumber={metacriticStoreNumber}
            />
          }
        />
        <Route
          path="/saleprices"
          element={
            <SalePrices
              gamesByPrice={gamesByPrice}
              setPageNumber={setPricePageNumber}
              pageNumber={pricePageNumber}
              setStoreNumber={setPriceStoreNumber}
              storeNumber={priceStoreNumber}
              unixTimeStamp={unixTimeStamp}
            />
          }
        />
        <Route
          path="/releasedate"
          element={
            <ReleaseDate
              gamesByReleaseDate={gamesByReleaseDate}
              setPageNumber={setReleasePageNumber}
              pageNumber={releasePageNumber}
              setStoreNumber={setReleaseStoreNumber}
              storeNumber={releaseStoreNumber}
              unixTimeStamp={unixTimeStamp}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
