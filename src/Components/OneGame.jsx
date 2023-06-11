/* eslint react/prop-types: 0 */
import { useParams } from "react-router-dom";

export default function OneGame({ games }) {
  const { id } = useParams();
  const selectedGame = games.find((game) => game.gameID === id);
  return (
    <>
      <h1>Game Details: {id}</h1>
      {/* {selectedGame.title} */}
      <br />
      {JSON.stringify(selectedGame)}
      <br />
      {/* {selectedGame.title}
      {selectedGame.steamRatingPercent} */}
      {/* <button onClick={() => }/> */}
    </>
  );
}
