/* eslint react/prop-types: 0 */

import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import RecentGames from "../HomePageInnerComponents/RecentGames";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";

export default function Homepage({
  gamesByMetacritic,
  gamesByPrice,
  gamesByReleaseDate,
  unixTimeStamp,
}) {
  return (
    <>
      <div className="homepage">
        <CheapGamesGroup gamesByPrice={gamesByPrice} />
        <TopRatedGamesGroup gamesByMetacritic={gamesByMetacritic} />
        <RecentGames
          gamesByReleaseDate={gamesByReleaseDate}
          unixTimeStamp={unixTimeStamp}
        />
      </div>
    </>
  );
}
