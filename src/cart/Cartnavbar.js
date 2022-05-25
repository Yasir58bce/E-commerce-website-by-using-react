import React from "react";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cartnavbar = ({ setShow, size, }) => {

  const link={fontFamily:"crusive",color:"white",fontSize:"1.5rem",
  textDecoration: "none",}
   
  return (
    <nav>
      <div className="nav_box">
      <span className="my_shop" onClick={() => setShow(true)}>
          Back to Products
        </span>

<span>
<div class="" style={{display:"flex", flexDirection:"row"}}>
                                 <Link style={link} to="/homepage">Home</Link>
                                 </div>

</span>









        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <FaShoppingCart style={{color:"black"}} />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Cartnavbar;
