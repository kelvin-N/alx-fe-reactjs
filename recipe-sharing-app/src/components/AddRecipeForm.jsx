// src/components/AddRecipeForm.jsx

import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const { addRecipe } = useRecipeStore();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      ingredients,
    });

    setTitle("");
    setIngredients("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      ></textarea>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
