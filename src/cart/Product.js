import "./Product.css"
import { Link } from "react-router-dom";
const Product = ({ item, handleClick }) => {
  const { btn,title, price, img } = item;

  return (


<div className='cartwrapper' style={{justifyContent:"space-between", display:"flex", flexDirection:"row"}}>
     
        <div className="card">
          <div className="imgbox">
            <img style={{height:"12rem", width:"13rem"}} src={img} />
           
</div>          
          <div className="content">
<h5>{title}</h5>
          <h6>{price}</h6>
        
         <button className="card__btn"   
        onClick={() => handleClick(item)}
         >{btn}</button>
       

        </div>
        </div>
        </div>
        );
  };
  
  
  export default Product;