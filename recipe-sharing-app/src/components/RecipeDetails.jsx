// src/components/RecipeDetails.jsx

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
