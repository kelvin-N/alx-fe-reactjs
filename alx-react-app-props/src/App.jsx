import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 30,
    bio: "Loves hiking and reading"
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
