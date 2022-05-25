
import Footer from "./Footer";
import Navbar from "./Navbar";

const ReturnPolicy = (props) => {
    return ( 

<div>
<Navbar/><hr></hr>
<h2  style={{marginTop:"30px"}}  >{props.returnp}</h2>
<h5 style={{marginTop:"100px",textAlign:"left", marginLeft:"250px"}}> {props.name1}</h5>
<ul style={{textAlign:"left",marginLeft:"275px"}}>
<li>In case of replacement customer will send the shoes back to the warehouse and pay the delivery charges.</li>
<li>Customer cannot ask for refund if it is sent for replacement .</li>
<li>If the product is replaced once and customer still ask for another size change company can reject it if the product is not available in stock, and a refund cannot be issued.</li>
<li>If the product replaced with another article with a lesser price. Only a coupon will be issued that can be used for future purchase and no refund for that amount. </li>

</ul>
<h5 style={{marginTop:"30px",textAlign:"left", marginLeft:"250px"}}> {props.name2}</h5>
<ul style={{textAlign:"left",marginLeft:"275px"}}>
<li> If a product received damaged it will be refunded along with the delivery charges paid by customer. </li>
<li>If a customer did not like a product and wants to return it, Rs200 delivery charges along with Rs400 handling charges (Packing cost, Material cost, Labour) </li>
<li>Product cannot be refunded if not claimed within 3 working days after delivery.</li>
<li>QisstPay orders cannot be refunded, they can only be replaced.</li>
<li>Refund will only be done until after the product is received at the warehouse and inspected by the management. </li>
</ul>

<Footer/>

</div>



     );
}
 
export default ReturnPolicy;