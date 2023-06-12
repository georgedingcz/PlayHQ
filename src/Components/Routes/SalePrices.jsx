/* eslint react/prop-types: 0 */
import { Link } from "react-router-dom";

export default function SalePrices({ games, unixTimeStamp }) {
  const sortedGamesPrice = games.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });

  return (
    <>
      {sortedGamesPrice.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          <br />
          Price:${game.salePrice}
          <br />
          {unixTimeStamp(game.lastChange)}
          <br />
          <Link to={`/games/${game.gameID}`}>
            <img width="300" src={game.thumb} />
          </Link>{" "}
        </ol>
      ))}
    </>
  );
}
