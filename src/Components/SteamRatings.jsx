/* eslint react/prop-types: 0 */

export default function SteamRatings({ games }) {
  const sortedGamesRating = games.toSorted((a, b) => {
    return b.steamRatingPercent - a.steamRatingPercent;
  });

  return (
    <>
      {sortedGamesRating.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          <br></br>
          Steam Rating: {game.steamRatingPercent}
          <br></br>
          <img width="300" src={game.thumb} />
        </ol>
      ))}
      <h2>Steam Ratings</h2>
    </>
  );
}
