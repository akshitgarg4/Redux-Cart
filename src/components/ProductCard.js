import React from "react";
function ProductCard(props) {
  const {item} =props;
  return (
        <div className="product-item">
        <p>{item.title}</p>
        <img src={item.src} alt="product-img"/>
          <button className="price">{`Rs ${item.price}`}</button>
          <button className="add-to-cart">ADD TO CART</button>
      </div>
  )
}

export default ProductCard;
