// import {createSlice} from "@reduxjs/toolkit";
// // ../../assets/images/image-product-1-thumbail.jpg

// const initialState = {
//   name: "Fall Limited Edition Sneakers",
//   description:
//     "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",

//   price: 125,
//   quantity: 0,
//   img: "../../assets/images/image-product-1-thumbail.jpg",
// };

// const productSlice = createSlice({
//   name: "product",
//   initialState,

//   reducers: {
//     inreaseItemQuantity(state) {
//       state.quantity++;
//     },
//     clearQuantity(state) {
//       state.quantity = 0;
//     },

//     decreaseItemQuantity(state) {
//       if (!state.quantity === 0) return;
//       state.quantity--;
//     },
//   },
// });

// export const {increaseItemQuantity, clearQuantity, decreaseItemQuantity} =
//   productSlice.actions;

// export default productSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
// // ../../assets/images/image-product-1-thumbail.jpg

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
// });

// export default cartSlice.reducer;

const initialState = {
  quantity: 0,
  id: 123,
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increaseQuantity(state) {
      state.quantity++;
    },
    decreaseItemQuantity(state) {
      if (state.quantity === 0) return;
      state.quantity--;
    },
    clearQuantity(state) {
      state.quantity = 0;
    },
  },
});

export const {increaseQuantity, decreaseItemQuantity, clearQuantity} =
  productSlice.actions;

export default productSlice.reducer;
