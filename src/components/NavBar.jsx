import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="sticky top-0 z-40 border-b border-emerald-950/10 bg-[linear-gradient(120deg,#0b2a1f_0%,#123a2c_45%,#0f2e23_100%)] text-amber-50/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-[0.25em] uppercase text-amber-100"
        >
          Paradise Nursery
        </Link>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.2em]">
          <Link to="/products" className="transition hover:text-amber-200">
            Products
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCart size={24} />

            {/* Badge */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
