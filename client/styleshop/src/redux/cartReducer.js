// add any new products, delete, or reset the cart items
// create an inital state that inputs card products and create actions for delete or reset

// the addToCart is going utatlize action,state,and payload to check to see if an item exist inside the cart(products) and to find each item by their id to see if its equal to the action payload ID(aka lets see if the item being pushed exists in the cart already) and tie it to the "item" variable. then we write an if statement that if the item exists we can increase the quantity of it and update in the cart. and if its not we're just going to push into the cart. this is doable with redux toolkits immutable js to mutate the array.

// for remove item, we're going to send the productID as a payload,so if we press the remove button we can take the product ID as the payload action then filter it out of our products array which then deletes the item

// reset cart will just be an empty array

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
