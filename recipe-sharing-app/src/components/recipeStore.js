import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  // The list of recipes
  recipes: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Replace the entire recipes list
  setRecipes: (recipes) => set({ recipes }),
}));
