import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter"; // optional

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <Counter /> {/* optional */}
      <Footer />
    </div>
  );
}

export default App;
