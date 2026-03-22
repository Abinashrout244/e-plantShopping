import Navbar from "../components/NavBar";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10 rounded-3xl border border-emerald-950/10 bg-white/75 p-8 shadow-[0_25px_70px_-45px_rgba(14,45,33,0.6)] backdrop-blur">
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-emerald-900/60">
            Private Cart
          </p>
          <h2 className="mb-4 text-4xl font-semibold text-emerald-950">
            Your Botanical Collection
          </h2>
          <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.35em] text-emerald-900/70">
            <span>Total Items: {totalItems}</span>
            <span>Total Cost: Rs. {totalCost}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="h-fit rounded-3xl border border-emerald-950/10 bg-emerald-950 p-8 text-amber-50 shadow-[0_25px_70px_-45px_rgba(14,45,33,0.8)]">
            <h3 className="mb-4 text-2xl font-semibold">Order Summary</h3>
            <p className="mb-8 text-sm text-amber-100/80">
              Hand-wrapped, moisture-secure packaging with priority delivery.
            </p>
            <div className="mb-8 space-y-3 text-xs uppercase tracking-[0.35em]">
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>Rs. {totalCost}</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/products">
                <button className="w-full rounded-full border border-amber-200/30 bg-transparent px-6 py-3 text-xs uppercase tracking-[0.35em] text-amber-50 transition hover:bg-amber-50/10">
                  Continue Shopping
                </button>
              </Link>

              <button className="w-full rounded-full border border-amber-500/40 bg-amber-600 px-6 py-3 text-xs uppercase tracking-[0.35em] text-amber-50 shadow-[0_18px_45px_-30px_rgba(96,64,28,0.9)] transition hover:-translate-y-0.5 hover:bg-amber-500">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;