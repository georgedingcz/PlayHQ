/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function RecentGames({ gamesByReleaseDate, unixTimeStamp }) {
  const sortedGames = gamesByReleaseDate.toSorted((a, b) => {
    return b.releaseDate - a.releaseDate;
  });
  sortedGames.splice(4);
  return (
    <>
      <h2>Most Recent Games</h2>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <Link className="card" key={game.gameID} to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
            <br />
            {game.title}
            <br />
            {unixTimeStamp(game.releaseDate)}
            <br />
          </Link>
        ))}
      </div>
    </>
  );
}
