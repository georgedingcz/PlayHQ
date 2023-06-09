export default function SteamRatings({ games }) {
  return (
    <>
      {games.map((game) => (
        <li key={game.gameID}>
          {game.title}
          <br></br>
          {game.steamRatingPercent}
          <br></br>
          <img width="300" src={game.thumb} />
        </li>
      ))}
      <h2>Steam Ratings</h2>
    </>
  );
}
