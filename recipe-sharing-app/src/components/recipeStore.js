// src/components/recipeStore.js

import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),
  setFavorites: (newFavorites) => set(() => ({ favorites: newFavorites })),
  setRecommendations: (newRecs) => set(() => ({ recommendations: newRecs })),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),
  addRecommendation: (recipe) =>
    set((state) => ({
      recommendations: [...state.recommendations, recipe],
    })),
}));
