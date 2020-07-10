import React from "react";
import {addToCart, removeFromCart} from '../actions/cart';

function ProductProfile(props) {

    const products=props.products;
    const id=props.match.params.id;
    const curr=products[id];
    var itemInCart=false;
    const handleClick = (element) =>{
        props.dispatch(addToCart(element));
    }
    const handleClick2 = (element) =>{
        props.dispatch(removeFromCart(element));
    }
    props.cart.forEach((cartItem)=>{
         if(cartItem.id === curr.id)
        {
            itemInCart=true;
         }
     })

  return (
    <div className="home-container">
        <div className="product-container">
            <div className="product-img">
                <img src={curr.src} alt="product-img" />
            </div>

            <div className="product-info">
                <p className="heading">{curr.title}</p>
                <span className="text1">
                    Features:
                    <ul>
                        {curr.features.map((ele)=>{return <li key={ele}>{ele}</li>})} 
                    </ul>
                </span>
                <button className="price"> PRICE </button>
                <button className="price">{`RS ${curr.price}`}</button>
                <br/>
                {itemInCart ? <button className="add-to-cart remove" onClick={()=>handleClick2(curr)}>REMOVE FROM CART</button>
                    : <button className="add-to-cart " onClick={()=>handleClick(curr)}>ADD TO CART</button>}
            </div>
        </div>
    </div>
  )
}

export default ProductProfile;
