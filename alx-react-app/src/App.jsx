import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const user = {
    name: "Kelvin N.",
    email: "kelvin@example.com",
    role: "Student",
  };

  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <UserProfile name={user.name} email={user.email} role={user.role} />
    </div>
  );
}

export default App;
