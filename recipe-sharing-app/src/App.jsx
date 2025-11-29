// src/App.jsx

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { useRecipeStore } from "./components/recipeStore";

const App = () => {
  // Initialize the recipe store (ensures components share same store instance)
  useRecipeStore();

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Recipe Sharing App</h1>

      {/* Form to add new recipes */}
      <AddRecipeForm />

      <hr style={{ margin: "20px 0" }} />

      {/* Display list of recipes */}
      <RecipeList />
    </div>
  );
};

export default App;
