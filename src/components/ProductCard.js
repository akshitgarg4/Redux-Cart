import React from "react";
function ProductCard() {
  return (
      <div className="product-item">
        <p>TITLE</p>
        <img src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="cart-logo"/>
          <button className="price">PRICE</button>
          <button className="add-to-cart">ADD TO CART</button>
      </div>
    
  )
}

export default ProductCard;
