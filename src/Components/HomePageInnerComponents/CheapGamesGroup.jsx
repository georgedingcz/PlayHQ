/* eslint react/prop-types: 0 */

import "../../CSS/CheapGameStyle.css";

export default function CheapGamesGroup({ games }) {
  const filteredGame = games.filter((game) => {
    return game.salePrice < 2;
  });
  return (
    <>
      <h1>Cheap Games (Less than $2!!)</h1>
      <div className="CheapGameStyle">
        {filteredGame.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            {/* {JSON.stringify(game.title)} */}
            <br />
            {game.salePrice}
            <br />
            <img width="300" src={game.thumb} />
          </ol>
        ))}
      </div>
    </>
  );
}
