/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function GameTitles({
  gamesByName,
  setTitlePageNumber,
  titlePageNumber,
  setTitleStoreNumber,
  titleStoreNumber,
  gameStores,
  sortGroup,
  setSortGroup,
  unixTimeStamp,
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
  const handleSortGroupChange = (event) => {
    setSortGroup(event.target.value);
  };
  return (
    <div>
      <br />
      <div>
        <>
          <button onClick={handlePreviousPage}>Prev.</button> Page:{" "}
          {titlePageNumber + 1} <button onClick={handleNextPage}>Next</button>
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
        </>{" "}
        <>
          Choose sorting criterion:
          <select
            name="sorting choice"
            value={sortGroup}
            onChange={handleSortGroupChange}
          >
            <option value="title">Title</option>
            <option value="dealRating">Deal Rating</option>
            <option value="savings">Savings</option>
            <option value="price">Price</option>
            <option value="metacritic">Metacritic Rating</option>
            <option value="recent">Last Change</option>
            <option value="release">Release Date</option>
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
            <div className="gameName"> {gameByName.title}</div>
            <br />
            Deal Rating: {gameByName.dealRating}
            <br />
            Savings: {gameByName.savings}%
            <br />
            Sale Price: {gameByName.salePrice}
            <br />
            Normal Price: {gameByName.normalPrice}
            <br />
            Metacritic Score: {gameByName.metacriticScore}
            <br />
            Last Change: {unixTimeStamp(gameByName.lastChange)}
            <br />
            Release Date: {unixTimeStamp(gameByName.releaseDate)}
            <br />
            <br/>
          </Link>
        ))}
      </div>
    </div>
  );
}
