import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div>Welcome to your meal planner</div>
      <p>
        Add some <Link to="/recipes">recipes</Link>
      </p>
      <p>
        Add to your <Link to="/planner">planner</Link>
      </p>
      <p>
        Create your <Link to="/shopping-list">shopping list</Link>
      </p>
    </>
  );
};

export default HomePage;
