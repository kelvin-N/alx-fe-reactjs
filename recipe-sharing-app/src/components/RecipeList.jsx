import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none", color: "black" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients.substring(0, 50)}...</p> {/* Preview */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
