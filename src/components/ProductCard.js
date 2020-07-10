import React from "react";
import { Link } from "react-router-dom";
import {addToCart} from '../actions/cart';

function ProductCard(props) {
  const { item } = props;
  
  const handleClick = (element) =>{
      props.dispatch(addToCart(element));
  }

  return (
    
      <div className="product-item">
        <Link to={`/profile/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.src} alt="product-img" />
        </Link>
        <button className="price">{`Rs ${item.price}`}</button>
        <button className="add-to-cart" onClick={()=>handleClick(item)}>ADD TO CART</button>
      </div>
   
  );
}

export default ProductCard;
