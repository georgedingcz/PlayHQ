/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function SteamRatings({ games }) {
  const sortedGamesRating = games.toSorted((a, b) => {
    return b.steamRatingPercent - a.steamRatingPercent;
  });

  return (
    <>
      {sortedGamesRating.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          <br />
          Steam Rating: {game.steamRatingPercent}
          <br />
          <Link to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
          </Link>{" "}
        </ol>
      ))}
      <h2>Steam Ratings</h2>
    </>
  );
}
