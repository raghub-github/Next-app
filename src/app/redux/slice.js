const { createSlice } = require("@reduxjs/toolkit");

const isServer = typeof window === 'undefined';

const loadCartFromLocalStorage = () => {
    try {
        const storedCart = !isServer && localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Error loading cart from local storage:', error);
        return [];
    };
};

const calculateSubtotal = (cart) => {
    if (cart.length === 0) {
        return 0;
    };
    return cart.reduce((total, item) => total + item.qty * item.price, 0);
};

const saveCartToLocalStorage = (cart) => {
    try {
        !isServer && localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to local storage:', error);
    };
};

const initialState = {
    carts: !isServer && localStorage.getItem('cart') ? loadCartFromLocalStorage() : [],
    subTotal: calculateSubtotal(loadCartFromLocalStorage()),
};

const CartSlice = createSlice({
    name: "addToCartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { itemCode, qty, price, name, size, varient } = action.payload;
            const newItem = {
                id: Date.now(),
                itemCode,
                qty,
                price,
                name,
                size,
                varient,
            };
            state.carts.push(newItem);
            saveCartToLocalStorage(state.carts);
            state.subTotal = calculateSubtotal(state.carts);
        },
        removeFormCart: (state, action) => {
            const { id, qty } = action.payload;
            const existingItem = state.carts.find((item) => item.id === id);
            if (existingItem) {
                existingItem.qty = Math.max(existingItem.qty - qty, 0);
                if (existingItem.qty === 0) {
                    state.carts = state.carts.filter((item) => item.id !== id);
                }
                saveCartToLocalStorage(state.carts);
                state.subTotal = calculateSubtotal(state.carts);
            };
        },
        clearCart: (state) => {
            state.carts = [];
            saveCartToLocalStorage(state.carts);
            state.subTotal = 0;
        },
        increment: (state, action) => {
            const id = action.payload;
            const existingItem = state.carts.find((item) => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
                saveCartToLocalStorage(state.carts);
                state.subTotal = calculateSubtotal(state.carts);
            };
        },
        decrement: (state, action) => {
            const id = action.payload;
            const existingItem = state.carts.find((item) => item.id === id);
            if (existingItem && existingItem.qty > 0) {
                existingItem.qty -= 1;
                if (existingItem.qty === 0) {
                    state.carts = state.carts.filter((item) => item.id !== id);
                }
                saveCartToLocalStorage(state.carts);
                state.subTotal = calculateSubtotal(state.carts);
            };
        },
    }
});

export const {
    addToCart,
    removeFormCart,
    increment,
    decrement,
    clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;