/* eslint react/prop-types: 0 */

export default function SalePrices({ games }) {
  const sortedGamesPrice = games.toSorted((a, b) => {
    return a.salePrice - b.salePrice;
  });
  const unixTimeStamp = (lastChange) => {
    const milliseconds = lastChange * 1000;
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
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
          <img width="300" src={game.thumb} />
        </ol>
      ))}
    </>
  );
}
