/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function ReleaseDate({
  gamesByReleaseDate,
  setPageNumber,
  setStoreNumber,
  pageNumber,
  storeNumber,
  unixTimeStamp,
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
      {gamesByReleaseDate.map((gameByReleaseDate) => (
        <ol key={gameByReleaseDate.gameID}>
          {gameByReleaseDate.title}
          <br />
          Release Date: {unixTimeStamp(gameByReleaseDate.releaseDate)}
          <br />
          <Link to={`/games/${gameByReleaseDate.gameID}`}>
            <img width="300" src={gameByReleaseDate.thumb} />
          </Link>
        </ol>
      ))}
      <h2>Steam Ratings</h2>
    </>
  );
}
