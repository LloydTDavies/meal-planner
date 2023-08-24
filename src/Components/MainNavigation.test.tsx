import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { MemoryRouter } from "react-router-dom"; // To provide a router context

import MainNavigation from "./MainNavigation";

describe("MainNavigation Component", () => {
  test("renders navigation links", async () => {
    await render(
      <MemoryRouter>
        <MainNavigation />
      </MemoryRouter>
    );

    const homeLink = await screen.queryByText("Home");
    const recipesLink = await screen.queryByText("Recipes");
    const plannerLink = await screen.queryByText("Planner");
    const shoppingListLink = await screen.queryByText("Shopping List");

    screen.debug();

    expect(homeLink).toBeTruthy();
    expect(homeLink?.getAttribute("href")).toEqual("/");

    expect(recipesLink).toBeTruthy();
    expect(recipesLink?.getAttribute("href")).toEqual("/recipes");

    expect(plannerLink).toBeTruthy();
    expect(plannerLink?.getAttribute("href")).toEqual("/planner");

    expect(shoppingListLink).toBeTruthy();
    expect(shoppingListLink?.getAttribute("href")).toEqual("/shopping-list");
  });
});
