import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Updated imports to match renamed files
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pass cart count to Navbar so it can show item count */}
        <Navbar cartCount={cart.length} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Shop cart={cart} setCart={setCart} />} />
            <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
