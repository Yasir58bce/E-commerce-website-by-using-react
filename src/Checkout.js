import Footer from "./Footer";
import Form1 from "./Form1";
import Navbar from "./Navbar";



import React, { Component } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;




const Checkout = (props) => {
   
    const location = useLocation();
    const { obj } = location.state;
    console.log(obj)
   
    return ( 

<div>
<Navbar/><hr></hr>


<div>

<Form1   />

</div>
{/* 
<div style={{ marginLeft: '800px', marginTop: '-500px' }} class="col-md-4">
        <h2 style={{}}> </h2>
        <Summary>


          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Name</SummaryItemText>
            {obj.map((item) => (
              <SummaryItemPrice>{item.Des}</SummaryItemPrice>
            ))}
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Price</SummaryItemText>
            {obj.map((item) => (
              <SummaryItemPrice>{item.Price}</SummaryItemPrice>
            ))}
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Price</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
           <SummaryItem type="total">
           <SummaryItemText>Total</SummaryItemText>
           <SummaryItemPrice>$ 80</SummaryItemPrice>
         </SummaryItem> 

        </Summary>
      </div> */}






<div style={{marginTop:"200px"}}> 
   <hr></hr>
   
   
    <Footer/>
    </div>

</div>


     );
}
 
export default Checkout;