import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts1 = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getproducts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch('http://localhost:3000/api/getproducts');
    return response.json();
});

const initialState = {
    products: [],
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;
