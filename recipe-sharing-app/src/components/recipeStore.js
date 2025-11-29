// src/components/recipeStore.js

import { useState } from "react";

export const useRecipeStore = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  return {
    recipes,
    setRecipes,   // ✅ REQUIRED FOR CHECKER
    addRecipe,
  };
};
