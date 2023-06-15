/* eslint react/prop-types: 0 */

import { NavLink } from "react-router-dom";
import SearchBar from "./HomePageInnerComponents/SearchBar";

export default function Nav({ setGameDetails }) {
  return (
    <>
      <header>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/games">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/saleprices">Sale Prices</NavLink>
            </li>
            <li>
              <NavLink to="/ratings">Metacritic Ratings</NavLink>
            </li>
            <li>
              <NavLink to="/releasedate">Release Dates</NavLink>
            </li>
            <li>
              <SearchBar setGameDetails={setGameDetails} />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
