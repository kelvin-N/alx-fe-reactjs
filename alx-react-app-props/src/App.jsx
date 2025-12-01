// src/App.jsx
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div style={{ padding: "20px" }}>
        <h1>User Context Example</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
};

export default App;
