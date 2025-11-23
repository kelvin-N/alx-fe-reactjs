import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [], // NEW

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // ⭐ ADD FAVORITE
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  // ⭐ REMOVE FAVORITE
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // ⭐ SEARCH
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // ⭐ BASIC RECOMMENDATIONS (same ingredient or title match)
  getRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      if (favoriteRecipes.length === 0) return { recommendations: [] };

      const keywords = favoriteRecipes
        .map((fav) => fav.title.toLowerCase().split(" "))
        .flat();

      const recommended = state.recipes.filter((recipe) => {
        if (state.favorites.includes(recipe.id)) return false;

        return keywords.some((word) =>
          recipe.title.toLowerCase().includes(word)
        );
      });

      return { recommendations: recommended };
    }),

  recommendations: [], // NEW
}));
