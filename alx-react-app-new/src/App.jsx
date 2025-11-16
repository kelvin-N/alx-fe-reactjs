import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <WelcomeMessage message="Welcome to My App!" />
      <MainContent />
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
