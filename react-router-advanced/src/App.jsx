import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";

const isAuthenticated = false; // Simulate login status

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Protected profile route with nested & dynamic routing */}
      <Route
        path="/profile/:userId/*"
        element={
          isAuthenticated ? <Profile /> : <Navigate to="/login" />
        }
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
