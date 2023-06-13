/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function MetacriticRatings({
  gamesByMetacritic,
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
      {gamesByMetacritic.map((gameByMetacritic) => (
        <ol key={gameByMetacritic.gameID}>
          {gameByMetacritic.title}
          <br />
          Metacritic Rating: {gameByMetacritic.metacriticScore}
          <br />
          <Link to={`/games/${gameByMetacritic.gameID}`}>
            <img width="300" src={gameByMetacritic.thumb} />
          </Link>
        </ol>
      ))}
      <h2>Steam Ratings</h2>
    </>
  );
}
