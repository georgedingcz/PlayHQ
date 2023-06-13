import { NavLink } from "react-router-dom";

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
              <NavLink to="/games">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/ratings">Steam Ratings</NavLink>
            </li>
            <li>
              <NavLink to="/saleprices">Sale Prices</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
