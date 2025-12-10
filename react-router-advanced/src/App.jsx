import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <nav style={{ marginBottom: "1.5rem" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
          <Link to="/blog/1" style={{ marginRight: "10px" }}>Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />

          {/* Dynamic blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* 404 fallback */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
