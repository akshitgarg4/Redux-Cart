import React from "react";
import {connect} from 'react-redux';
import CartCard from './CartCard';

function Cart(props) {
  return (
    <div className="home-container">
      {props.cart.map((item) => {
        return <CartCard item={item} key={item.id} dispatch={props.dispatch}  cart={props.cart}/>;
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    cart:state.cart
  };
}
export default connect(mapStateToProps)(Cart);
