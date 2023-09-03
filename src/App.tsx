// helpers
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Nested components
import HomePage from "./Views/HomePage";
import OrdersPage from "./Views/OrdersPage";
import AddCustomerPage from "./Views/AddCustomerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="orders/:current_customer_id" element={<OrdersPage />} />
        <Route path="/add_customer" element={<AddCustomerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
