/* eslint react/prop-types: 0 */

// import { Outlet } from "react-router-dom";

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
          {/* {JSON.stringify(game.title)} */}
          <br />
          <img width="300" src={game.thumb} />
        </ol>
      ))}
    </>
  );
}
