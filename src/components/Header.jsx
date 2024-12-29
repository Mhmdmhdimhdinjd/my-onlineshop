import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Online Store</h1>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header