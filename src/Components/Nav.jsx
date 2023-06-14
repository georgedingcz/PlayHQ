import { NavLink } from "react-router-dom";
import SearchBar from "./HomePageInnerComponents/SearchBar";

export default function Nav() {
  return (
    <>
      <header>
        <div>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/games">Games By Name</NavLink>
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
              <SearchBar />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
