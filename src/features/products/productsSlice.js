import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({

    name: 'products',
    initialState: [
        {id:1 , name:'one' , price :5000},

        {id:2 , name:'one' , price :5000},

        {id:3 , name:'one' , price :5000},

        {id:4 , name:'one' , price :5000},

        {id:5 , name:'one' , price :5000}

    ] ,

    reducers: {

        setproducts: (state, action) => {
            return action.payload
        }

    }

})

export const { setproducts } = productsSlice.actions

export default productsSlice.reducer