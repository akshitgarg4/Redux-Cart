import { ADD_TO_CART } from "../actions/actionTypes";

const initialCartState = [];
export default function products(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.item, ...state];

    default:
      return state;
  }
}
