/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function SalePrices({
  gamesByPrice,
  unixTimeStamp,
  setPricePageNumber,
  pricePageNumber,
  setPriceStoreNumber,
  priceStoreNumber,
  gameStores,
}) {
  const handleNextPage = () => {
    setPricePageNumber(pricePageNumber + 1);
  };
  const handlePreviousPage = () => {
    setPricePageNumber(pricePageNumber - 1);
  };
  const handleStoreChange = (event) => {
    setPriceStoreNumber(event.target.value);
  };
  const sortedGamesPrice = gamesByPrice.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });
  return (
    <div>
      <br />
      <div>
        <>
          <button onClick={handlePreviousPage}>Prev.</button>
          Page: {pricePageNumber + 1}
          <button onClick={handleNextPage}>Next</button>
        </>
        <br />
        <br />
        <>
          Choose a shop:
          <select
            name="store choice"
            value={priceStoreNumber}
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
        {sortedGamesPrice.map((gameByPrice) => (
          <Link
            className="otherCard"
            key={gameByPrice.gameID}
            to={`/games/${gameByPrice.gameID}`}
          >
            <img width="300" src={gameByPrice.thumb} />
            {gameByPrice.title}
            <br />
            Price:$ {gameByPrice.salePrice}
            <br />
            Last Update: {unixTimeStamp(gameByPrice.lastChange)}
            <br />
          </Link>
        ))}
      </div>
    </div>
  );
}
