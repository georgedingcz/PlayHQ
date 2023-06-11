/* eslint react/prop-types: 0 */

import "../../CSS/CheapGameStyle.css";
import { Link } from "react-router-dom";

export default function CheapGamesGroup({ games }) {
  const filteredGame = games.filter((game) => {
    return game.salePrice < 2;
  });
  const sortedGamesPrice = filteredGame.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });  return (
    <>
      <h1>Cheap Games (Less than $2!!)</h1>
      <div className="CheapGameStyle">
        {sortedGamesPrice.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            ${game.salePrice}
            <br />
            <Link to={`/games/${game.gameID}`}>
              <img width="300" src={game.thumb} />
            </Link>
          </ol>
        ))}
      </div>
    </>
  );
}
