/* eslint react/prop-types: 0 */

import { Link } from "react-router-dom";

export default function SearchComponent({ gameDetails }) {
  return (
    <>
      <div>
        <br />
        {gameDetails?.map((gameDetail) => (
          <ol key={gameDetail.gameID}>
            <br />
            <br />
            {gameDetail.external}
            <br />
            Cheapest Price: {gameDetail.cheapest}
            <br />
            <Link to={`/games/${gameDetail.gameID}`}>
              <img width="300" src={gameDetail.thumb} />
            </Link>
            <br />
            <br />
          </ol>
        ))}
      </div>
    </>
  );
}
