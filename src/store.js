// import {configureStore} from "@reduxjs/toolkit";

// import cartReducer from "./features/cart/CartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
