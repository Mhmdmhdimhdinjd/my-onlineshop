import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => dispatch( removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <button onClick={() => dispatch( clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;