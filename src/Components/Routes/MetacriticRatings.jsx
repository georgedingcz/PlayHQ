/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function MetacriticRatings({
  gamesByMetacritic,
  setMetacriticPageNumber,
  setMetacriticStoreNumber,
  metacriticPageNumber,
  metacriticStoreNumber,
}) {
  const handleNextPage = () => {
    setMetacriticPageNumber(metacriticPageNumber + 1);
  };
  const handleNextStore = () => {
    setMetacriticStoreNumber(metacriticStoreNumber + 1);
  };
  const handlePreviousPage = () => {
    setMetacriticPageNumber(metacriticPageNumber - 1);
  };
  const handlePreviousStore = () => {
    setMetacriticStoreNumber(metacriticStoreNumber - 1);
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
          <button onClick={handlePreviousStore}>Prev.</button>
          Store: {metacriticStoreNumber}
          <button onClick={handleNextStore}>Next</button>
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
