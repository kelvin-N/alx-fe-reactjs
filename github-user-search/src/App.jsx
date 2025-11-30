// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";
import Search from "./components/Search";   // ✅ GitHub Search component

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Recipe Sharing App</h1>

        {/* Navigation */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Recipes</Link>
          <Link to="/add" style={{ marginRight: "10px" }}>Add Recipe</Link>
          <Link to="/favorites" style={{ marginRight: "10px" }}>Favorites</Link>
          <Link to="/recommendations" style={{ marginRight: "10px" }}>Recommendations</Link>
          <Link to="/github-search">GitHub Search</Link> {/* ✅ New Route */}
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/recommendations" element={<RecommendationList />} />
          <Route path="/github-search" element={<Search />} /> {/* ✅ GitHub Search */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
