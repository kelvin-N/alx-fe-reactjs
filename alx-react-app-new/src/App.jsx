// Import all components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* User Profiles */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys coding and basketball" />
      <UserProfile name="Charlie" age={28} bio="Passionate about music and travel" />

      {/* Counter */}
      <Counter />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
