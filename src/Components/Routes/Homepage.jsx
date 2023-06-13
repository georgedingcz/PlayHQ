/* eslint react/prop-types: 0 */

import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import RecentGames from "../HomePageInnerComponents/RecentGames";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";

export default function Homepage({ games, unixTimeStamp }) {
  return (
    <>
      <h1>Welcome To PlayHQ</h1>
      <CheapGamesGroup games={games} />
      <TopRatedGamesGroup games={games} />
      <RecentGames games={games} unixTimeStamp={unixTimeStamp} />
    </>
  );
}

//choose and get game store data
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

// const [testAir, setTestAir] = useState();
// useEffect(() => {
//   async function getAirTable() {
//     const response = await fetch(
//       `https://api.airtable.com/v0/applqK2pr4BxQlJ07/PlayHQ`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer key1Adz0lNfrpm3Y2`,
//         },
//       }
//     );
//     const jsonData = await response.json();
//     setTestAir(jsonData);
//   }
//   getAirTable();
// }, []);
// console.log(testAir?.records);
// const toTest = testAir?.records;
// const toTest = testAir.records

{
  /* <h2>
        <label>Choose an online game store:</label>
        <select name="stores" id="store-select">
          {sortedGameStore.map((store) => (
            <option key={store.storeID} value={store.storeName}>
              {store.storeName}
            </option>
          ))}
        </select>
      </h2> */
}
{
  /* {JSON.stringify(testAir)} */
}
{
  /* {toTest?.map((air) => (
        <ol key={air.id}>{air.fields?.title}</ol>
      ))} */
}
{
  /* {sortedGames.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            <br />
            {unixTimeStamp(game.lastChange)}
            <br />
            <Link to={`/games/${game.gameID}`}>
              <img width="300" src={game.thumb} />
            </Link>{" "}
          </ol>
        ))} */
}
