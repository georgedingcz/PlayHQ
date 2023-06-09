/* eslint react/prop-types: 0 */

export default function GameTitles({ games }) {
  const sortedGamesName = games.toSorted((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      {sortedGamesName.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          <br></br>
          <img width="300" src={game.thumb} />
        </ol>
      ))}
    </>
  );
}
