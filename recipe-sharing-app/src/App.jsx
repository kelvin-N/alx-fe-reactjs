import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavouritesList />} />
          <Route path="/recommendations" element={<RecommendationList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
