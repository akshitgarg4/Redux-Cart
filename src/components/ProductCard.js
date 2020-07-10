import React from "react";
import { Link } from "react-router-dom";
import {addToCart, removeFromCart} from '../actions/cart';

function ProductCard(props) {
  const { item ,cart} = props;

  const handleClick = (element) =>{
      props.dispatch(addToCart(element));
  }
  const handleClick2 = (element) =>{
    props.dispatch(removeFromCart(element));
}

  var itemInCart=false;
  cart.forEach((cartItem)=>{
    if(cartItem.id === item.id)
    {
        itemInCart=true;
    }
  })

  return (
    
      <div className="product-item">
        <Link to={`/profile/${item.id}`}>
        <p>{item.title}</p>
        <img src={item.src} alt="product-img" />
        </Link>
        <button className="price">{`Rs ${item.price}`}</button>
        {itemInCart ? <button className="add-to-cart remove" onClick={()=>handleClick2(item)}>REMOVE FROM CART</button>
          : <button className="add-to-cart " onClick={()=>handleClick(item)}>ADD TO CART</button>}
      </div>
   
  );
}

export default ProductCard;
