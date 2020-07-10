import React from "react";
function Bill(props) {
  const { products, cart } = props;
  const { title, from } = props.match.params;
  var list;
  if (from === "cart") {
    list = cart;
  } else {
    list = products;
  }
  if (list.length === 0) {
    return (
      <div className="home-container">
        <h1> Cart is Empty </h1>
      </div>
    );
  }

  var item;
  list.forEach((ele) => {
    if (title === ele.title) {
      item = ele;
    }
  });
  if (item.qty === 0) {
    return (
      <div className="home-container">
        <h1>No bill to generate as Quantity is 0 </h1>
      </div>
    );
  }
  return (
    <div className="home-container">
      <div className="bill-container">
        <p className="text3">BILL</p>
        <table>
          <tr>
            <th>Product Purchased</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>{item.title}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.qty * item.price}</td>
          </tr>
        </table>
        <p className="text3"> Thanks for Shopping !!</p>
      </div>
    </div>
  );
}
export default Bill;
