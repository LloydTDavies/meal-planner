import { Link } from "react-router-dom";
import './MainNavigation.scss'

export const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul className="app-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/planner">Planner</Link>
          </li>
          <li>
            <Link to="/shopping-list">Shopping List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
