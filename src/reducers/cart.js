import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
} from "../actions/actionTypes";

const initialCartState = [];
export default function products(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.item, ...state];
    case REMOVE_FROM_CART:
      var newProduct2 = state.filter(
        (element) => element.id !== action.item.id
      );
      return newProduct2;
    case INCREASE_QTY:
      var newProduct3 = state.filter((element) => {
        if (element.id === action.item.id) {
          element.qty += 1;
        }
        return element;
      });
      return newProduct3;
    case DECREASE_QTY:
      var newProduct4 = state.filter((element) => {
        if (element.id === action.item.id && element.qty > 0) {
          element.qty -= 1;
        }
        return element;
      });
      return newProduct4;
    default:
      return state;
  }
}
