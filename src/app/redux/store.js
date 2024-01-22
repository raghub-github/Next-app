const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./slice";

// export const store = configureStore({
//     reducer: {
//         reducer,
//     },
// });

import cartReducer from "./slice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productSlice,
        userData: userSlice,
    },
});
