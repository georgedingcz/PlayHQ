/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function SalePrices({
  gamesByPrice,
  unixTimeStamp,
  setPricePageNumber,
  setPriceStoreNumber,
  pricePageNumber,
  priceStoreNumber,
}) {
  const handleNextPage = () => {
    setPricePageNumber(pricePageNumber + 1);
  };
  const handleNextStore = () => {
    setPriceStoreNumber(priceStoreNumber + 1);
  };
  const handlePreviousPage = () => {
    setPricePageNumber(pricePageNumber - 1);
  };
  const handlePreviousStore = () => {
    setPriceStoreNumber(priceStoreNumber - 1);
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
          <button onClick={handlePreviousStore}>Prev.</button>
          Store: {priceStoreNumber}
          <button onClick={handleNextStore}>Next</button>
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
