/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function GameTitles({
  gamesByName,
  setTitlePageNumber,
  titlePageNumber,
  setTitleStoreNumber,
  titleStoreNumber,
  gameStores,
}) {
  const handleNextPage = () => {
    setTitlePageNumber(titlePageNumber + 1);
  };
  const handlePreviousPage = () => {
    setTitlePageNumber(titlePageNumber - 1);
  };
  const handleStoreChange = (event) => {
    setTitleStoreNumber(event.target.value);
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
          Choose a shop:
          <select
            name="store choice"
            value={titleStoreNumber}
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
