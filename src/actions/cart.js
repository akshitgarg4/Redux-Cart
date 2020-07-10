import { ADD_TO_CART } from "./actionTypes";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item: item,
  };
}
