import React from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Page404 from "./Page404";
import ProductProfile from './ProductProfile';
import Cart from './Cart';

function App(props) {
  const {products,cart,dispatch} = props;
  return (
    <Router>
      <div>
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile/:id" render={(props)=>{return (<ProductProfile {...props} products={products} dispatch={dispatch} cart={cart}/>)}} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
    cart:state.cart
  };
}
export default connect(mapStateToProps)(App);
