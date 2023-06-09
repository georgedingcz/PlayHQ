/* eslint react/prop-types: 0 */

import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";

export default function Homepage({ games }) {
  return (
    <>
      <h1>Welcome To PlayHQ</h1>
      {/* <p>{JSON.stringify(games)}</p> */}
      <CheapGamesGroup games={games} />
      <TopRatedGamesGroup games={games} />
      <br />
      <h1>Most Recent Games</h1>
    </>
  );
}
