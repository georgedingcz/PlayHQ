/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function SalePrices({
  gamesByPrice,
  unixTimeStamp,
  setPageNumber,
  setStoreNumber,
  pageNumber,
  storeNumber,
}) {
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleNextStore = () => {
    setStoreNumber(storeNumber + 1);
  };
  const sortedGamesPrice = gamesByPrice.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });

  return (
    <>
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
      {sortedGamesPrice.map((gameByPrice) => (
        <ol key={gameByPrice.gameID}>
          {gameByPrice.title}
          <br />
          Price:$ {gameByPrice.salePrice}
          <br />
          Last Update: {unixTimeStamp(gameByPrice.lastChange)}
          <br />
          <Link to={`/games/${gameByPrice.gameID}`}>
            <img width="300" src={gameByPrice.thumb} />
          </Link>{" "}
        </ol>
      ))}
    </>
  );
}
