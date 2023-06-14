/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function CheapGamesGroup({ gamesByPrice }) {
  const sortedGames = gamesByPrice.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });
  sortedGames.splice(4);
  return (
    <>
      <h2>Cheapest Games</h2>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <Link className="card" key={game.gameID} to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
            <br />
            {game.title}
            <br />${game.salePrice}
            <br />
          </Link>
        ))}
      </div>
    </>
  );
}
