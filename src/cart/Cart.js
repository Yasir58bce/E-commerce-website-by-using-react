  import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import {Link,useNavigate} from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Current total of your Cart items are :</span>
        <span>Rs / {price}</span>

       

      </div>
      <Link to="/Checkout" state={{ obj: cart }}>  <button disabled={cart.length < 1} style={{ width: '150px', height: '50px', backgroundColor: 'brown', border: 'none', color: 'white', fontWeight: 'bold', marginTop: '10px' }}>Checkout</button></Link>
    </article>
  );
};

export default Cart;
