import { Link } from "react-router-dom";

/* eslint react/prop-types: 0 */

export default function TopRatedGamesGroup({ gamesByMetacritic }) {
  const sortedGames = gamesByMetacritic.toSorted((a, b) => {
    return b.metacriticScore - a.metacriticScore;
  });
  const spliceSortedGames = sortedGames.splice(4);
  return (
    <>
      <h1>Top Rated Games</h1>
      <div className="homepageSection">
        {sortedGames.map((game) => (
          <Link className="card" key={game.gameID} to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
            <br />
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            {game.metacriticScore}
            <br />
          </Link>
        ))}
      </div>
    </>
  );
}
