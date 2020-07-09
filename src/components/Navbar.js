import React from "react";
import {Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
      <div className="home-logo">
        <Link to='/'>
          Redux-Cart
        </Link>
      </div>
      <div>
        <img className="cart-logo" src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="cart-logo" />
        <div className="count">
            <span>1</span></div>
      </div>
    </div>
  );
}

export default Navbar;
