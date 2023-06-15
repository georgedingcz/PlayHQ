import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import GameTitles from "./Components/Routes/GameTitles";
import SalePrices from "./Components/Routes/SalePrices";
import Homepage from "./Components/Routes/Homepage";
import Nav from "./Components/Nav";
import OneGame from "./Components/Routes/OneGame";
import NoGame from "./Components/Routes/NoGame";
import ReleaseDate from "./Components/Routes/ReleaseDate";
import SearchComponent from "./Components/HomePageInnerComponents/SearchComponent";
import MetacriticRatings from "./Components/Routes/MetacriticRatings";

function App() {
  const [gamesByName, setGamesByName] = useState([]);
  const [gamesByMetacritic, setGamesByMetacritic] = useState([]);
  const [gamesByPrice, setGamesByPrice] = useState([]);
  const [gamesByReleaseDate, setGamesByReleaseDate] = useState([]);

  const [titlePageNumber, setTitlePageNumber] = useState(0);
  const [titleStoreNumber, setTitleStoreNumber] = useState(1);

  const [metacriticPageNumber, setMetacriticPageNumber] = useState(0);
  const [metacriticStoreNumber, setMetacriticStoreNumber] = useState(1);

  const [pricePageNumber, setPricePageNumber] = useState(0);
  const [priceStoreNumber, setPriceStoreNumber] = useState(1);

  const [releasePageNumber, setReleasePageNumber] = useState(0);
  const [releaseStoreNumber, setReleaseStoreNumber] = useState(1);

  const [gameDetails, setGameDetails] = useState([]);

  const [gameStores, setGameStores] = useState([]);

  const [sortGroup, setSortGroup] = useState("Title")

  //retrieve all games
  useEffect(() => {
    async function getGamesByName() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${titleStoreNumber}&upperPrice=50&pageNumber=${titlePageNumber}&sortBy=${sortGroup}`
      );
      const jsonData = await response.json();
      setGamesByName(jsonData);
    }
    getGamesByName();
  }, [titleStoreNumber, titlePageNumber, sortGroup]);

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

  //retrieve list of stores
  useEffect(() => {
    async function getGameStores() {
      const response = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
      const jsonData = await response.json();
      setGameStores(jsonData);
    }
    getGameStores();
  }, []);

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
      {/* nav bar that will show at the top of all pages */}
      {<Nav setGameDetails={setGameDetails} />}
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
        {/* route with games sorted by alphabetical order */}
        <Route path="/games">
          <Route
            index
            element={
              <GameTitles
                gamesByName={gamesByName}
                setTitlePageNumber={setTitlePageNumber}
                titlePageNumber={titlePageNumber}
                setTitleStoreNumber={setTitleStoreNumber}
                titleStoreNumber={titleStoreNumber}
                gameStores={gameStores}
                setSortGroup={setSortGroup}
                sortGroup={sortGroup}
                unixTimeStamp={unixTimeStamp}
              />
            }
          />
          {/* route when a specific game is selected */}
          <Route
            path=":id"
            element={<OneGame unixTimeStamp={unixTimeStamp} />}
          />
          <Route path="*" element={<NoGame />} />
        </Route>
        {/* route with games sorted by metacritic ratings */}
        <Route
          path="/ratings"
          element={
            <MetacriticRatings
              gamesByMetacritic={gamesByMetacritic}
              setMetacriticPageNumber={setMetacriticPageNumber}
              metacriticPageNumber={metacriticPageNumber}
              setMetacriticStoreNumber={setMetacriticStoreNumber}
              metacriticStoreNumber={metacriticStoreNumber}
              gameStores={gameStores}
            />
          }
        />
        {/* route with games sorted by sale prices */}
        <Route
          path="/saleprices"
          element={
            <SalePrices
              gamesByPrice={gamesByPrice}
              setPricePageNumber={setPricePageNumber}
              pricePageNumber={pricePageNumber}
              setPriceStoreNumber={setPriceStoreNumber}
              priceStoreNumber={priceStoreNumber}
              unixTimeStamp={unixTimeStamp}
              gameStores={gameStores}
            />
          }
        />
        {/* route with games sorted by release date */}
        <Route
          path="/releasedate"
          element={
            <ReleaseDate
              gamesByReleaseDate={gamesByReleaseDate}
              setReleasePageNumber={setReleasePageNumber}
              releasePageNumber={releasePageNumber}
              setReleaseStoreNumber={setReleaseStoreNumber}
              releaseStoreNumber={releaseStoreNumber}
              unixTimeStamp={unixTimeStamp}
              gameStores={gameStores}
            />
          }
        />
        {/* route with search results */}
        <Route
          path="/search/:id"
          element={<SearchComponent gameDetails={gameDetails} />}
        />
      </Routes>
    </>
  );
}

export default App;
