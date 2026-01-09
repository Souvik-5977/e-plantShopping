import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; 
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        item => item.name === name
      );

      if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity++;
      } else {
        // If item does not exist, add new item
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the cart
      const itemToUpdate = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
