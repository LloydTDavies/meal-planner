import { Link } from "react-router-dom";
import './MainNavigation.css'

export const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
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
