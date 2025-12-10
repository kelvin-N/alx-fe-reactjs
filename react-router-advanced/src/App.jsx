import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import Navbar from "./components/Navbar";

const isAuthenticated = false; // simulate login

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            isAuthenticated ? <Profile /> : <Navigate to="/login" />
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Blog List */}
        <Route path="/blog" element={<BlogList />} />

        {/* Dynamic Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Page */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
