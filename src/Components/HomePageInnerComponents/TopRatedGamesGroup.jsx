import "../../CSS/TopRatedGameStyle.css";
import { Link } from "react-router-dom";

/* eslint react/prop-types: 0 */

export default function TopRatedGamesGroup({ games }) {
  const filteredGame = games.filter((game) => {
    return game.steamRatingPercent > 90;
  });
  const sortedGamesRating = filteredGame.toSorted((a, b) => {
    return b.steamRatingPercent - a.steamRatingPercent;
  });
  return (
    <>
      <h1>Top Rated Games (Rated higher than 90%!!)</h1>
      <div className="TopRatedGameStyle">
        {sortedGamesRating.map((game) => (
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
