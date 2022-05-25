import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Products from "./cart/Products";


import Cartnavbar from "./cart/Cartnavbar";
import Cart from "./cart/Cart";
const Formal = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

 

  return (

<div>
 <React.Fragment>
     
      <Cartnavbar setShow={setShow} size={cart.length} />
      {show ? (
        <Products  handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      <Footer/>

    </React.Fragment>
    </div>

  );
};

export default Formal;
