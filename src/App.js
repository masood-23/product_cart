import React, { useState } from "react";
import './App.css';
import Grapes from './Grapes.jpg';
import Mango from './Mango.jpg';

export default function Product1() {
    const [products] = useState([
        ["Grapes", 9000, Grapes],
        ["Mango", 12000, Mango]
    ]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const addProduct = (product) => {
        setCart([...cart, ...product]);
        setTotalPrice(getTotalPrice([...cart, ...product]));
    };

    const removeItem = (name) => {
        const updatedCart = cart.filter((item) => name !== item[0]);
        setCart(updatedCart);
        setTotalPrice(getTotalPrice(updatedCart));
    };

    const getTotalPrice = (items) => {
        return items.reduce((total, item) => total + item[1], 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Display an alert with the entered name, address, and total price
        alert(`Name: ${name}\nAddress: ${address}\nTotal Price: ${totalPrice}`);
    };

    return (
        <div>
            <h2>Available Products for you..</h2>
            {products.map((item, index) => (
                <div key={index} className="catalogue">
                    <div className="p1">
                        <img src={item[2]} width={200} height={200} alt={item[0]} /><br /><br />
                        <b>Details of the product</b><br />
                        Name: {item[0]}<br />
                        Price: {item[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="addbtn" onClick={() => addProduct([item])}>Add to cart</button>
                    </div>
                </div>
            ))}
            <div>
                <h3>Shopping Cart</h3>
                {cart.map((item, index) => (
                    <div key={index} className="catalogue">
                        <div className="p1">
                            <img src={item[2]} width={200} height={200} alt={item[0]} /><br /><br />
                            <b>Details of the product:</b><br />
                            Product: {item[0]}<br />
                            Price: {item[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => removeItem(item[0])}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
					<br/>
            {totalPrice > 0 && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br/>
                    </label>
                    <br />
                    <label>
                        Address:
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required /><br/>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            )}<br/>
            <input type="text" readOnly id="tp" value={`Total Price: ${totalPrice}`} />
        </div>
    );
}
