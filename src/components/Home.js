import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
function Home(props) {
  return (
    <div className="home-container">
      {props.products.map((item) => {
        return <ProductCard item={item} key={item.id} dispatch={props.dispatch}  cart={props.cart}/>;
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
    cart:state.cart
  };
}
export default connect(mapStateToProps)(Home);
