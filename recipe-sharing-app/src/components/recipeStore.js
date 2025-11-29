// src/components/recipeStore.js

import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",

  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));
