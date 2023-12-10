import React from 'react';
import './App.css'
function Product({product,onAddtoCart}){
return (
    <div className="product-list">
        <h2 id="product-name">{product.name}</h2>
        <img src={product.image} style={{height: "100px", width: "100px"}} id ="product-img"></img>
        <p id="product-price">{product.price}</p>
        <button onClick={()=>onAddtoCart(product)} id="product-button">Add to cart</button>
    </div>
);
}
export default Product;