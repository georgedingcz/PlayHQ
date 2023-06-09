export default function GameTitles({ games }) {
  return (
    <>
      {games.map((game) => (
        <li key={game.gameID}>
          {game.title}
          <br></br>
          <img width="300" src={game.thumb} />
        </li>
      ))}
      <h2>Game Titles</h2>
    </>
  );
}
