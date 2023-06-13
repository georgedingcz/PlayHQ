/* eslint react/prop-types: 0 */

import { Link, useParams } from "react-router-dom";
import SearchBar from "../HomePageInnerComponents/SearchBar";
import { useEffect, useState } from "react";

export default function GameTitles({ games, setPageNumber, setStoreNumber, pageNumber, storeNumber }) {
  // const [pageCounter, setPageCounter] = useState(1);
  // const [storeCounter, setStoreCounter] = useState(1);
  const [gameStores, setGameStores] = useState([]);

  const handleNextPage = () => {
    // setPageCounter(pageCounter + 1);
    setPageNumber(pageNumber + 1);
  };

  const handleNextStore = () => {
    // setStoreCounter(storeCounter + 1);
    setStoreNumber(storeNumber + 1);
  };

useEffect(() => {
  async function getGameStores() {
    const response = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
    const jsonData = await response.json();
    setGameStores(jsonData);
  }
  getGameStores();
}, []);

const sortedGameStore = gameStores.toSorted((a, b) => {
  if (a.storeName < b.storeName) {
    return -1;
  }
});


  return (
    <>
      <SearchBar />
      <>
        <br />
        <button onClick={handleNextPage}>Next Page</button>
        Page: {pageNumber}
      </>
      <br />
      <>
        <br />
        <button onClick={handleNextStore}>Next Store</button>
        Store: {storeNumber}
      </>
      {games?.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          {/* {JSON.stringify(game.title)} */}
          <br />
          <Link to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
          </Link>{" "}
        </ol>
      ))}
    </>
  );
}

// const { id } = useParams();

// useEffect(() => {
//   async function getGame() {
//     const response = await fetch(
//       `https://www.cheapshark.com/api/1.0/games?id=${id}`
//     );
//     const jsonData = await response.json();
//     setChosenGame(jsonData);
//   }
//   getGame();
// }, [id]);

// const game = games.find((game) => game.gameID === id);
// const [allGames, setAllGames] = useState();
// const [pageNumber, setPageNumber] = useState(1);

// const sortGamesName = allGames?.sort((a, b) => {
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// });

// const [storeNumber, setStoreNumber] = useState(1);
// useEffect(() => {
//   async function getAllGames() {
//     const response = await fetch(
//       `https://www.cheapshark.com/api/1.0/deals?storeID=${storeNumber}&upperPrice=50&pageNumber=${pageNumber}`
//     );
//     const jsonData = await response.json();
//     setAllGames(jsonData);
//   }
//   getAllGames();
// }, [storeNumber, pageNumber]);
