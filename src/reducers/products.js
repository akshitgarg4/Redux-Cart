const initialProductsState = [
{id:1,title:"Mobile Phone",price:9999,qty:0,src:'https://i.gadgets360cdn.com/products/large/1521089921_635_vivo_v9_db.jpg'},
{id:2,title:"Watch",price:2999,qty:0,src:'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Smart-Watch-Mobile-(3-in-1)-2.jpg'},
{id:3,title:"Water Bottle",price:499,qty:0,src:'https://dwh39hsbrwe7m.cloudfront.net/media/catalog/product/cache/83d1798589160ed719728cafde2f5745/b/s/bsw750ss12_easy_sip_750_ml_stainless_steel_bottle_bronze_d_1_.jpg'},
{id:4,title:"Bag",price:999,qty:0,src:'https://images-na.ssl-images-amazon.com/images/I/91ArJudYdDL._SL1500_.jpg'},
{id:5,title:"Purse",price:1800,qty:0,src:'https://www.chloe.com/45/45437749va_22_f.jpg'},
{id:6,title:"Pendrive",price:450,qty:0,src:'https://www.customshape.in/media/catalog/product/cache/1/thumbnail/700x/17f82f742ffe127f42dca9de82fb58b1/c/a/card-otg-usb-pendrive.jpg'}
];
export default function products(state = initialProductsState) {
  return state;
}
