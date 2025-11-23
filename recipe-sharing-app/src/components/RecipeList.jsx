// src/components/RecipeList.jsx
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ddd", padding: 8, margin: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
