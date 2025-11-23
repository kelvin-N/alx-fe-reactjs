// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients}</p>

      {/* Edit form (in-place) */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete button */}
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetails;
