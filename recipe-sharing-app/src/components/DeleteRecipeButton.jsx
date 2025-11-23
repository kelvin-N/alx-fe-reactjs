// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(recipeId);
    navigate("/"); // go back to list after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", marginTop: 10 }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
