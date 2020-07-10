import React from "react";
import { removeFromCart} from '../actions/cart';

function CartCard(props) {

    const {item,dispatch}=props;
    const handleClick2 = (element) =>{
        dispatch(removeFromCart(element));
    }
    

  return (
    
        <div className="product-container">
            <div className="product-img">
                <img src={item.src} alt="product-img" />
            </div>

            <div className="product-info">
                <p className="heading">{item.title}</p>
                <span className="text1">
                    Features:
                    <ul>
                        {item.features.map((ele)=>{return <li key={ele}>{ele}</li>})} 
                    </ul>
                </span>
                <button className="price">{`RS ${item.price}`}</button>
                <img className="change" src="https://image.flaticon.com/icons/svg/992/992651.svg" alt="plus"/>
                <span className="text">{item.qty}</span>
                <img className="change" src="https://image.flaticon.com/icons/svg/659/659892.svg" alt="plus"/>
                <br/>
                <button className="buy">Place Order</button>
                <button className="add-to-cart remove" onClick={()=>handleClick2(item)}>REMOVE FROM CART</button>
            </div>
        </div>
    
  )
}

export default CartCard;
