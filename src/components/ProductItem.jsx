import React from 'react'

import { useDispatch } from 'react-redux'

import {addToCart} from '../features/cart/cartSlice'

const ProductItem = ({ Product }) => {
    const dispatch = useDispatch()

    return (

        <div>
            <h2>{Product.name}</h2>
            <h1>{Product.price}</h1>
            <button type='button' onClick={() =>dispatch(addToCart(Product))}></button>
        </div>

    )
}

export default ProductItem