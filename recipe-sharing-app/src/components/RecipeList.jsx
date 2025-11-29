// src/components/RecipeList.jsx

import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { recipes } = useRecipeStore();

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
