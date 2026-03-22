import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../store/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="rounded-3xl border border-emerald-950/10 bg-white/80 p-6 shadow-[0_18px_55px_-40px_rgba(14,45,33,0.7)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl border border-amber-700/40 bg-[linear-gradient(135deg,#f7e7c9,#d1a96b)]" />
          <div>
            <h3 className="text-2xl font-semibold text-emerald-950">
              {item.name}
            </h3>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-900/60">
              Curated Edition
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="text-sm uppercase tracking-[0.25em] text-emerald-900/50">
            Rs. {item.price}
          </div>
          <div className="rounded-full border border-emerald-900/10 bg-emerald-950/90 px-5 py-2 text-xs uppercase tracking-[0.35em] text-amber-50">
            Total Rs. {item.price * item.quantity}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          className="rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-950 transition hover:bg-emerald-50"
          onClick={() => dispatch(increaseQty(item.id))}
        >
          Add One
        </button>
        <button
          className="rounded-full border border-emerald-900/15 bg-white px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-950 transition hover:bg-emerald-50"
          onClick={() => dispatch(decreaseQty(item.id))}
        >
          Remove One
        </button>
        <button
          className="rounded-full border border-amber-700/40 bg-amber-600/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-50 transition hover:bg-amber-600"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;