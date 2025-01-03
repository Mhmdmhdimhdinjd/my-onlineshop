import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({

    name: 'cart',

    initialState: [],

    reducers: {

        addToCart: (state, action) => {
            state.push(action.payload) ;
        },

        removeFromCart: (state, action) => {

            return state.filter(item => item.id !== action.payload.id) ;

        },

        clearCart: (state) => {
            return [] ;
        },

    },
});

export const { removeFromCart ,clearCart ,addToCart} = cartSlice.actions

export default cartSlice.reducer