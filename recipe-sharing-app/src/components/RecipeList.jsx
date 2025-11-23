import { useRecipeStore } from "./recipeStore"; // ✅ fixed path

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.length === 0 && <p>No recipes yet.</p>}

      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
