import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../store/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* DETAILS */}
      <div className="flex-1 space-y-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">Unit Price: ₹{item.price}</p>
        <p className="font-bold text-green-600">
          Total: ₹{item.price * item.quantity}
        </p>

        {/* QUANTITY CONTROLS */}
        <div className="flex items-center gap-3 mt-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "decrease" }))
            }
          >
            -
          </button>

          <span className="font-medium">{item.quantity}</span>

          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, type: "increase" }))
            }
          >
            +
          </button>
        </div>
      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={() => dispatch(removeItem(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
}

export default CartItem;
