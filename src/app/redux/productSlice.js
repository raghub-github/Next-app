import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [{ name: "iphone" }],
    loading: false,
    error: null,
};

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: "products/fetchStarted" });
    try {
        const response = await fetch("http://localhost:3000/api/getproducts");
        const data = await response.json();
        dispatch({ type: "products/fetchSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "products/fetchFailure", payload: error });
    };
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        allProducts: (state, action) => {
            console.log("allProducts");
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProducts.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchProducts.fulfilled, (state, action) => {
    //             state.products = action.payload;
    //             state.loading = false;
    //         })
    //         .addCase(fetchProducts.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message;
    //         });
    // },
});

export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
