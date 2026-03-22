import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    // ✅ REQUIRED NAME
    addItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ REQUIRED NAME
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },

    // ✅ REQUIRED NAME
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item) {
        if (type === "increase") {
          item.quantity += 1;
        }

        if (type === "decrease") {
          if (item.quantity === 1) {
            // ✅ REMOVE ITEM WHEN 0
            state.items = state.items.filter((i) => i.id !== id);
          } else {
            item.quantity -= 1;
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
