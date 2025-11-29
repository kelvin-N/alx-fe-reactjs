// src/components/EditRecipeForm.jsx

import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { ...recipe, title, ingredients });
    onClose(); // close edit form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
