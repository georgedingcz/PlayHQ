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
          <br />
          Price:${game.salePrice}
          <br />
          {game.lastChange}
          <br />
          <img width="300" src={game.thumb} />
        </ol>
      ))}
      <h2>Sale Prices</h2>
    </>
  );
}
