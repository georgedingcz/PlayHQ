import "../../CSS/TopRatedGameStyle.css";

/* eslint react/prop-types: 0 */

export default function TopRatedGamesGroup({ games }) {
  const filteredGame = games.filter((game) => {
    return game.steamRatingPercent > 90;
  });
  return (
    <>
      <h1>Top Rated Games (Rated higher than 90%!!)</h1>
      <div className="TopRatedGameStyle">
        {filteredGame.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            {game.steamRatingPercent}
            <br />
            <img width="300" src={game.thumb} />
          </ol>
        ))}
      </div>
    </>
  );
}
