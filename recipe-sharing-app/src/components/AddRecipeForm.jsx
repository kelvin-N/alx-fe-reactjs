import { useState } from "react";
import { useRecipeStore } from ".\recipeStore";

function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !ingredients.trim()) return;

    addRecipe({ title, ingredients });

    setTitle("");
    setIngredients("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>

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
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
