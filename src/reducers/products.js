import { INCREASE_QTY1, DECREASE_QTY1 } from "../actions/actionTypes";

const initialProductsState = [
  {
    id: 0,
    title: "Mobile Phone",
    price: 9999,
    qty: 0,
    src:
      "https://i.gadgets360cdn.com/products/large/1521089921_635_vivo_v9_db.jpg",
    features: ["6 GB RAM", "5000 mah BATTERY", "64 GB INTERNAL MEMORY"],
  },
  {
    id: 1,
    title: "Watch",
    price: 2999,
    qty: 0,
    src:
      "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Smart-Watch-Mobile-(3-in-1)-2.jpg",
    features: ["Long Battery Life", "Infrared Sensor", "Touch Screen"],
  },
  {
    id: 2,
    title: "Water Bottle",
    price: 499,
    qty: 0,
    src:
      "https://dwh39hsbrwe7m.cloudfront.net/media/catalog/product/cache/83d1798589160ed719728cafde2f5745/b/s/bsw750ss12_easy_sip_750_ml_stainless_steel_bottle_bronze_d_1_.jpg",
    features: ["Light Weight", "1.5L Capacity", "Dual Thermal Inside"],
  },
  {
    id: 3,
    title: "Bag",
    price: 999,
    qty: 0,
    src:
      "https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg",
    features: ["Extra Laptop Space", "Water Proof", "Smart Look"],
  },
  {
    id: 4,
    title: "Purse",
    price: 1800,
    qty: 0,
    src: "https://www.chloe.com/45/45437749va_22_f.jpg",
    features: ["Extra Space for Mobile", "Water Proof", "Smart Look"],
  },
  {
    id: 5,
    title: "Pendrive",
    price: 450,
    qty: 0,
    src:
      "https://www.customshape.in/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/c/a/card-otg-usb-pendrive.jpg",
    features: ["16 GB STORAGE", "STYLISH", "Easy to Carry in wallet"],
  },
];
export default function products(state = initialProductsState,action) {
  switch (action.type) {
    case INCREASE_QTY1:
      var newProduct1 = state.filter((element) => {
        if (element.id === action.item.id) {
          element.qty += 1;
        }
        return element;
      });
      return newProduct1;
    case DECREASE_QTY1:
      var newProduct2 = state.filter((element) => {
        if (element.id === action.item.id && element.qty > 0) {
          element.qty -= 1;
        }
        return element;
      });
      return newProduct2;
    default:
      return state;
  }
}
