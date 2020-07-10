import React from "react";
import {Link } from 'react-router-dom';
function Navbar(props) {
  const {cart} =props;
  return (
    <div className="navbar">
      <div className="home-logo">
        <Link to='/'>
          Redux-Cart
        </Link>
      </div>
      <div>
        <Link to='/cart'>
        <img className="cart-logo" src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="cart-logo" />
        </Link>
        <div className="count">
            <span>{cart.length}</span></div>
      </div>
    </div>
  );
}

export default Navbar;
