// helpers
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Nested components
import HomePage from "./Views/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
