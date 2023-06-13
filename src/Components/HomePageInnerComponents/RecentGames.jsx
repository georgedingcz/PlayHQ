/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function RecentGames({ gamesByReleaseDate, unixTimeStamp }) {
  //   const filteredGame = games.filter((game) => {
  //     return game.steamRatingPercent > 90;
  //   });
  const sortedGames = gamesByReleaseDate.toSorted((a, b) => {
    return b.releaseDate - a.releaseDate;
  });
  const spliceSortedGames = sortedGames.splice(4);

  return (
    <>
      <h1>Most Recent Games</h1>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <ol className="card" key={game.gameID}>
            {game.title}
            <br />
            {unixTimeStamp(game.releaseDate)}
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
