/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function ReleaseDate({
  gamesByReleaseDate,
  setReleasePageNumber,
  setReleaseStoreNumber,
  releasePageNumber,
  releaseStoreNumber,
  unixTimeStamp,
  gameStores,
}) {
  const handleNextPage = () => {
    setReleasePageNumber(releasePageNumber + 1);
  };
  const handlePreviousPage = () => {
    setReleasePageNumber(releasePageNumber - 1);
  };
  const handleStoreChange = (event) => {
    setReleaseStoreNumber(event.target.value);
  };
  return (
    <div>
      <br />
      <div>
        <>
          <button onClick={handlePreviousPage}>Prev.</button>
          Page: {releasePageNumber + 1}
          <button onClick={handleNextPage}>Next</button>
        </>
        <br />
        <br />
        <>
          Choose a shop:
          <select
            name="store choice"
            value={releaseStoreNumber}
            onChange={handleStoreChange}
          >
            {gameStores.map((gameStore) => (
              <option key={gameStore.storeID} value={gameStore.storeID}>
                {gameStore.storeName}
              </option>
            ))}
          </select>
        </>
      </div>
      <div>
        {gamesByReleaseDate.map((gameByReleaseDate) => (
          <Link
            className="otherCard"
            key={gameByReleaseDate.gameID}
            to={`/games/${gameByReleaseDate.gameID}`}
          >
            <img width="300" src={gameByReleaseDate.thumb} />
            {gameByReleaseDate.title}
            <br />
            Release Date: {unixTimeStamp(gameByReleaseDate.releaseDate)}
          </Link>
        ))}
      </div>
    </div>
  );
}
