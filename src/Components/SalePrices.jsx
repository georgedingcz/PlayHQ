import DateLastChange from "./DateLastChange";

export default function SalePrices({ games }) {
  return (
    <>
      {games.map((game) => (
        <li key={game.gameID}>
          {game.title}
          <br></br>
          {game.salePrice}
          <br></br>
          <img width="300" src={game.thumb} />
        </li>
      ))}
      <h2>Sale Prices</h2>
      <h3>{<DateLastChange />}</h3>
    </>
  );
}
