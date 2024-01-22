import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: `${process.env.API_LINK}`,
    loading: false,
    error: null,
};

// Define actions for fetching and updating user data
export const fetchUserData = () => async (dispatch) => {
    dispatch({ type: "userdata/fetchStarted" });
    try {
        const userData = await fetch("http://localhost:3000/api/getproducts");
        dispatch({ type: "userdata/fetchSuccess", payload: userData });
    } catch (error) {
        dispatch({ type: "userdata/fetchFailure", payload: error });
    }
};

const userdataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        userData: (state, action) => {
            console.log("userdata");
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchUserData.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchUserData.fulfilled, (state, action) => {
    //             state.user = action.payload;
    //             state.loading = false;
    //         })
    //         .addCase(fetchUserData.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message;
    //         });
    // },
});

export const { userData } = userdataSlice.actions;
export default userdataSlice.reducer;
