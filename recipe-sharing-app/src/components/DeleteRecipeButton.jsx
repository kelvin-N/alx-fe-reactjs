// src/components/DeleteRecipeButton.jsx

import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ useNavigate from react-router-dom

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // go back to recipe list after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
