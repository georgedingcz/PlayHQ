/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function CheapGamesGroup({ gamesByPrice }) {
  const sortedGames = gamesByPrice.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });
  const spliceSortedGames = sortedGames.splice(4);

  return (
    <>
      <h1>Cheapest Games</h1>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <ol className="card" key={game.gameID}>
            {game.title}
            <br />${game.salePrice}
            <br />
            <Link to={`/games/${game.gameID}`}>
              <img width="300" src={game.thumb} />
            </Link>
          </ol>
        ))}
      </div>
    </>
  );
}
