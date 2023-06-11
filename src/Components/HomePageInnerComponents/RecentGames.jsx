/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function RecentGames({ games, unixTimeStamp }) {
  //   const filteredGame = games.filter((game) => {
  //     return game.steamRatingPercent > 90;
  //   });
  const sortedGames = games.toSorted((a, b) => {
    return b.releaseDate - a.releaseDate;
  });
  const spliceSortedGames = sortedGames.splice(5);

  return (
    <>
      <h1>Most Recent Games</h1>
      <div className="TopRatedGameStyle">
        {sortedGames.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            {unixTimeStamp(game.lastChange)}
            <br />
            <Link to={`/games/${game.gameID}`}>
              <img width="300" src={game.thumb} />
            </Link>{" "}
          </ol>
        ))}
      </div>
    </>
  );
}
