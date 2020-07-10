import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
} from "./actionTypes";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item: item,
  };
}
export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    item: item,
  };
}
export function increaseQty(item) {
  return {
    type: INCREASE_QTY,
    item: item,
  };
}

export function decreaseQty(item) {
  return {
    type: DECREASE_QTY,
    item: item,
  };
}
