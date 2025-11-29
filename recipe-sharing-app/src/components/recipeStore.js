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
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? updatedRecipe : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  addFavorite: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),

  addRecommendation: (recipe) =>
    set((state) => ({ recommendations: [...state.recommendations, recipe] })),
}));
