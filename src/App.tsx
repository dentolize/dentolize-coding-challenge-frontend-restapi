// helpers
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Nested components
import HomePage from "./Views/HomePage";
import OrdersPage from "./Views/OrdersPage";
import AddCustomerPage from "./Views/AddCustomerPage";
import { OrdersProvider } from "./store/OrdersStore";

// Styled components
import { GlobalStyles } from "./components/styled/Global.styled";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <OrdersProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="orders/:current_customer_id" element={<OrdersPage />} />
          <Route path="/add_customer" element={<AddCustomerPage />} />
        </Routes>
      </OrdersProvider>
    </Router>
  );
}

export default App;
