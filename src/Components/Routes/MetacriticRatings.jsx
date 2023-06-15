/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function MetacriticRatings({
  gamesByMetacritic,
  setMetacriticPageNumber,
  metacriticPageNumber,
  setMetacriticStoreNumber,
  metacriticStoreNumber,
  gameStores,
}) {
  const handleNextPage = () => {
    setMetacriticPageNumber(metacriticPageNumber + 1);
  };
  const handlePreviousPage = () => {
    setMetacriticPageNumber(metacriticPageNumber - 1);
  };
  const handleStoreChange = (event) => {
    setMetacriticStoreNumber(event.target.value);
  };
  return (
    <div>
      <br />
      <div>
        <>
          <button onClick={handlePreviousPage}>Prev.</button>
          Page: {metacriticPageNumber + 1}
          <button onClick={handleNextPage}>Next</button>
        </>
        <br />
        <br />
        <>
          Choose a shop:
          <select
            name="store choice"
            value={metacriticStoreNumber}
            onChange={handleStoreChange}
          >
            {gameStores.map((gameStore) => (
              <option key={gameStore.storeID} value={gameStore.storeID}>
                {gameStore.storeName}
              </option>
            ))}
          </select>
        </>
        <br />
        <br />
      </div>

      <div>
        {gamesByMetacritic.map((gameByMetacritic) => (
          <Link
            className="otherCard"
            key={gameByMetacritic.gameID}
            to={`/games/${gameByMetacritic.gameID}`}
          >
            <img width="300" src={gameByMetacritic.thumb} />
            {gameByMetacritic.title}
            <br />
            Metacritic Rating: {gameByMetacritic.metacriticScore}
          </Link>
        ))}
      </div>
    </div>
  );
}
