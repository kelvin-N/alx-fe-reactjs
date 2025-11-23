import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !ingredients.trim()) return;

    updateRecipe(recipe.id, { title, ingredients });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
