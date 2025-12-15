import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const user = {
    name: "Kelvin N.",
    age: 20,
    bio: "I am learning React at ALX.",
  };

  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <UserProfile name={user.name} age={user.age} bio={user.bio} />
    </div>
  );
}

export default App;
