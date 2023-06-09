/* eslint react/prop-types: 0 */

export default function SalePrices({ games }) {
  const sortedGamesPrice = games.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });

  return (
    <>
      {sortedGamesPrice.map((game) => (
        <ol key={game.gameID}>
          {game.title}
          <br></br>
          Price:${game.salePrice}
          <br></br>
          {game.lastChange}
          <br></br>
          <img width="300" src={game.thumb} />
        </ol>
      ))}
      <h2>Sale Prices</h2>
    </>
  );
}
