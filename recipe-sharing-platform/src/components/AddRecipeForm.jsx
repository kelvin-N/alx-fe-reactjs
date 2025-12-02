import { useState } from "react";

function AddRecipeForm() {
  // Form state
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Validation error messages
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Add at least two ingredients (one per line)";
      }
    }

    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // valid = true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("NEW RECIPE SUBMITTED:", newRecipe);

    alert("Recipe submitted successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients (one per line)</label>
          <textarea
            className="w-full border rounded-md p-2 h-28 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="e.g.\nSalt\nTomatoes"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            className="w-full border rounded-md p-2 h-32 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Describe preparation steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
