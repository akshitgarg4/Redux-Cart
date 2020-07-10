import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialCartState = [];
export default function products(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      var newProduct=action.item;
      if(newProduct.qty===0)
      {
        newProduct.qty+=1;
      }
      return [newProduct, ...state];
    case REMOVE_FROM_CART:
        var newProduct2=state.filter(element=>element.id !== action.item.id);
        return newProduct2;
    default:
      return state;
  }
}
