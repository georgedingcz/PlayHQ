/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function GameTitles({
  gamesByName,
  setTitlePageNumber,
  setTitleStoreNumber,
  titlePageNumber,
  titleStoreNumber,
}) {
  const handleNextPage = () => {
    setTitlePageNumber(titlePageNumber + 1);
  };
  const handleNextStore = () => {
    setTitleStoreNumber(titleStoreNumber + 1);
  };
  const handlePreviousPage = () => {
    setTitlePageNumber(titlePageNumber - 1);
  };
  const handlePreviousStore = () => {
    setTitleStoreNumber(titleStoreNumber - 1);
  };

  return (
    <div>
      <br />
      <div>
        <>
          <button onClick={handlePreviousPage}>Prev.</button>
          Page: {titlePageNumber + 1}
          <button onClick={handleNextPage}>Next</button>
        </>
        <br />
        <br />
        <>
          <button onClick={handlePreviousStore}>Prev.</button>
          Store: {titleStoreNumber}
          <button onClick={handleNextStore}>Next</button>
        </>
      </div>
      <div>
        {gamesByName?.map((gameByName) => (
          <Link
            className="otherCard"
            key={gameByName.gameID}
            to={`/games/${gameByName.gameID}`}
          >
            <img width="300" src={gameByName.thumb} />
            {gameByName.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// const [gameStores, setGameStores] = useState([]);

// useEffect(() => {
//   async function getGameStores() {
//     const response = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
//     const jsonData = await response.json();
//     setGameStores(jsonData);
//   }
//   getGameStores();
// }, []);

// const sortedGameStore = gameStores.toSorted((a, b) => {
//   if (a.storeName < b.storeName) {
//     return -1;
//   }
// });

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

{
  /* {JSON.stringify(game.title)} */
}
