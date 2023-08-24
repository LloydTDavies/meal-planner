import { useState } from "react";
import "./Recipes.scss";

const MOCK_RECIPES = [
  {
    id: 0,
    name: "Chicken Souvlaki with Greek salad",
    favoured: false,
    img: "https://simply-delicious-food.com/wp-content/uploads/2019/05/greek-pork-souvlaki-1.jpg",
    ingredients: [
      {
        id: 0,
        name: "Chicken breast",
        quantity: 200,
        measurement: "grams",
      },
      {
        id: 1,
        name: "Feta",
        quantity: 50,
        measurement: "grams",
      },
      {
        id: 2,
        name: "Cucumber",
        quantity: 20,
        measurement: "grams",
      },
      {
        id: 3,
        name: "Onions",
        quantity: 10,
        measurement: "grams",
      },
      {
        id: 4,
        name: "Cherry Tomatoes",
        quantity: 40,
        measurement: "grams",
      },
    ],
  },
  {
    id: 0,
    name: "Chicken Souvlaki with Greek salad",
    favoured: false,
    img: "https://simply-delicious-food.com/wp-content/uploads/2019/05/greek-pork-souvlaki-1.jpg",
    ingredients: [
      {
        id: 0,
        name: "Chicken breast",
        quantity: 200,
        measurement: "grams",
      },
      {
        id: 1,
        name: "Feta",
        quantity: 50,
        measurement: "grams",
      },
      {
        id: 2,
        name: "Cucumber",
        quantity: 20,
        measurement: "grams",
      },
      {
        id: 3,
        name: "Onions",
        quantity: 10,
        measurement: "grams",
      },
      {
        id: 4,
        name: "Cherry Tomatoes",
        quantity: 40,
        measurement: "grams",
      },
    ],
  },
  {
    id: 0,
    name: "Chicken Souvlaki with Greek salad",
    favoured: false,
    img: "https://simply-delicious-food.com/wp-content/uploads/2019/05/greek-pork-souvlaki-1.jpg",
    ingredients: [
      {
        id: 0,
        name: "Chicken breast",
        quantity: 200,
        measurement: "grams",
      },
      {
        id: 1,
        name: "Feta",
        quantity: 50,
        measurement: "grams",
      },
      {
        id: 2,
        name: "Cucumber",
        quantity: 20,
        measurement: "grams",
      },
      {
        id: 3,
        name: "Onions",
        quantity: 10,
        measurement: "grams",
      },
      {
        id: 4,
        name: "Cherry Tomatoes",
        quantity: 40,
        measurement: "grams",
      },
    ],
  },
];

export const Recipes = () => {
  const [recipes] = useState(MOCK_RECIPES);
  return (
    <div>
      <h2>Here's our list of recipes</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={`recipe-${recipe.id}`}>
            <div className="recipe-card">
              <h3 className="recipe-card__header">{recipe.name}</h3>
              <img className="recipe-card__img" src={recipe.img} />
              {/* <h4>Ingredients</h4>
              <ul className="recipe-card__ingredients">
                {recipe.ingredients.map((ing) => (
                  <li key={`ing-${ing.id}`}>
                    {ing.name} - {ing.quantity} {ing.measurement}
                  </li>
                ))}
              </ul> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
