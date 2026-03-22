import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  // ✅ TOTAL ITEMS
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  // ✅ TOTAL AMOUNT (IMPORTANT FIX)
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          🛒 Shopping Cart
        </h2>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-xl">Your cart is empty 🪴</p>
            <p className="text-sm mt-2">Add some beautiful plants!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="bg-white shadow-md rounded-xl p-4 mb-6 flex justify-between items-center">
          <p className="text-lg">
            Total Items: <span className="font-semibold">{totalItems}</span>
          </p>

          <p className="text-lg">
            Total Amount:
            <span className="font-semibold text-green-600 ml-2">
              ₹{totalAmount}
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <Link to="/products">
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition">
              ⬅ Continue Shopping
            </button>
          </Link>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
            onClick={() => alert("Order placed successfully!")}
          >
            ✅ Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
