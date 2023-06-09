import { useEffect, useState } from "react";


export default function Homepage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    async function getGames() {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`
      );
      const jsonData = await response.json();
      setGames(jsonData);
    }
    getGames();
  }, []);
  return (
    <>
      <h1>Welcome To PlayHQ</h1>
      {games.map((game) => (
        <li key={game.gameID}>
          {game.title}
          <br></br>
          <img width="300" src={game.thumb} />
        </li>
      ))}
      {/* <p>{JSON.stringify(games)}</p> */}
    </>
  );
}
