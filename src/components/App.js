import React from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Page404 from "./Page404";
import ProductProfile from './ProductProfile';

function App(props) {
  const products = props.products;
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:id" render={(props)=>{return (<ProductProfile {...props} products={products}/>)}} />

          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(App);
