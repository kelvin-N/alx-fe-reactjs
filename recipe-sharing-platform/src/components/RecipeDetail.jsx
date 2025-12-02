import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === Number(id));
        setRecipe(selected);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="p-6 text-center">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
      />

      {/* Summary */}
      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1">
          {recipe.ingredients?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
