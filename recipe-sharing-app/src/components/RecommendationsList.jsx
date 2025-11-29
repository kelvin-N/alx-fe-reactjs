// src/components/RecommendationList.jsx

import { useRecipeStore } from "./recipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
