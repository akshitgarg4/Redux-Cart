import {
    INCREASE_QTY1,
    DECREASE_QTY1,
  } from "./actionTypes";
  export function increaseQty1(item) {
    return {
      type: INCREASE_QTY1,
      item: item,
    };
  }
  
  export function decreaseQty1(item) {
    return {
      type: DECREASE_QTY1,
      item: item,
    };
  }