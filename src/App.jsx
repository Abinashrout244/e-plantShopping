import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import "./App.css";

function Home() {
  return (
    <div className="background-image relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-white px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Paradise Nursery 🌿
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-200">
          Bring nature into your home with our premium collection of indoor
          plants. Fresh, beautiful, and calming 🌱
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/products">
            <button className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full text-lg shadow-lg">
              🌿 Get Started
            </button>
          </Link>

          <Link to="/cart">
            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-full text-lg">
              🛒 View Cart
            </button>
          </Link>
        </div>

        {/* Small tagline */}
        <p className="mt-10 text-sm text-gray-300 italic">
          Trusted by 10,000+ plant lovers 🌼
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/e-plantShopping">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
