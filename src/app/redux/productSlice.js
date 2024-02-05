import { createSlice } from "@reduxjs/toolkit";
const isServer = typeof window === 'undefined';

const fetchProducts = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/getproducts`);
        const data = await response.json();
        console.log("data1", data);
        return data;
    } catch (error) {
        console.error('Error loading Products:', error);
        return [];
    };
};

const initialState = {
    products: !isServer ? fetchProducts() : [],
    loading: false,
    error: null,
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
