import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";
import PlannerPage from "./pages/Planner";
import RecipesPage from "./pages/Recipes";
import ShoppingListPage from "./pages/ShoppingList";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "planner",
        element: <PlannerPage />,
      },
      {
        path: "shopping-list",
        element: <ShoppingListPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
