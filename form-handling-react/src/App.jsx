import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        User Registration
      </h1>
      <FormikForm />
    </div>
  );
}

export default App;
