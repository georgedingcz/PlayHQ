/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function ReleaseDate({
  gamesByReleaseDate,
  setReleasePageNumber,
  setReleaseStoreNumber,
  releasePageNumber,
  releaseStoreNumber,
  unixTimeStamp,
}) {
  const handleNextPage = () => {
    setReleasePageNumber(releasePageNumber + 1);
  };
  const handleNextStore = () => {
    setReleaseStoreNumber(releaseStoreNumber + 1);
  };
  const handlePreviousPage = () => {
    setReleasePageNumber(releasePageNumber - 1);
  };
  const handlePreviousStore = () => {
    setReleaseStoreNumber(releaseStoreNumber - 1);
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
          <button onClick={handlePreviousStore}>Prev.</button>
          Store: {releaseStoreNumber}
          <button onClick={handleNextStore}>Next</button>
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
