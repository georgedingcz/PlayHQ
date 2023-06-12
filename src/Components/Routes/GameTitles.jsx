/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";
import SearchBar from "../HomePageInnerComponents/SearchBar";

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
      <SearchBar />
      {sortedGamesName.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          {/* {JSON.stringify(game.title)} */}
          <br />
          <Link to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
          </Link>{" "}
        </ol>
      ))}
    </>
  );
}
