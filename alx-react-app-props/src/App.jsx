import { UserProvider } from "./context/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <UserProvider>
      <div>
        <h1>User Dashboard</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
