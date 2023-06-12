import "../../CSS/TopRatedGameStyle.css";
import { Link } from "react-router-dom";

/* eslint react/prop-types: 0 */

export default function TopRatedGamesGroup({ games }) {
  // const filteredGame = games.filter((game) => {
  //   return game.steamRatingPercent > 90;
  // });
  const sortedGames = games.toSorted((a, b) => {
    return b.steamRatingPercent - a.steamRatingPercent;
  });
  const spliceSortedGames = sortedGames.splice(4);
  return (
    <>
      <h1>Top Rated Games</h1>
      <div className="TopRatedGameStyle">
        {sortedGames.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            {game.steamRatingPercent}
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
