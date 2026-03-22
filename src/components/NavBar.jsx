import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="sticky top-0 z-40 border-b border-emerald-950/10 bg-[linear-gradient(120deg,#0b2a1f_0%,#123a2c_45%,#0f2e23_100%)] text-amber-50/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.7)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold tracking-[0.25em] uppercase text-amber-100"
        >
          Paradise Nursery
        </Link>

        <div className="flex items-center gap-6 text-sm uppercase tracking-[0.2em]">
          <Link to="/products" className="transition hover:text-amber-200">
            Products
          </Link>
          <Link to="/cart" className="relative transition hover:text-amber-200">
            Cart
            <span className="ml-2 inline-flex min-w-[2rem] items-center justify-center rounded-full border border-amber-200/40 bg-amber-200/10 px-2 py-0.5 text-xs text-amber-100">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;