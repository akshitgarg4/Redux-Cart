import React from "react";
function ProductProfile(props) {
    const products=props.products;
    const id=props.match.params.id;
    const curr=products[id];
  return (
    <div className="home-container">
        <div className="product-container">
            <div className="product-img">
                <img src={curr.src} alt="product-img" />
            </div>

            <div className="product-info">
                <p className="heading">{curr.title}</p>
                <span className="text1">
                    Features:
                    <ul>
                        {curr.features.map((ele)=>{return <li key={ele}>{ele}</li>})} 
                    </ul>
                </span>
                <button className="price">{`RS ${curr.price}`}</button>
                <img className="change" src="https://image.flaticon.com/icons/svg/992/992651.svg" alt="plus"/>&nbsp;
                <span className="text">{curr.qty}</span>
                <img className="change" src="https://image.flaticon.com/icons/svg/659/659892.svg" alt="plus"/>
                <br/>
                <button className="buy">Place Order</button>
                <button className="add-to-cart remove">REMOVE FROM CART</button>
            </div>
        </div>
    </div>
  )
}

export default ProductProfile;
