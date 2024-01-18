import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/shop-context";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import About from "./pages/about/about";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
