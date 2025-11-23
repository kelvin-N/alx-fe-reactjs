// src/components/EditRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // <- required by ALX checks
    updateRecipe(recipe.id, { title, ingredients });
    setEditing(false);
  };

  if (!editing)
    return (
      <button onClick={() => setEditing(true)} style={{ marginTop: 10 }}>
        Edit
      </button>
    );

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <div style={{ marginTop: 8 }}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditing(false)} style={{ marginLeft: 8 }}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditRecipeForm;
