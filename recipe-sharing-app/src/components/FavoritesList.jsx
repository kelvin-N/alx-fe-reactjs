// src/components/FavouritesList.jsx

import { useRecipeStore } from "./recipeStore";

const FavouritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>Favourite Recipes</h2>
      <ul>
        {favorites.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
