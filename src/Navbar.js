import React, { Component } from 'react';
import styled from "styled-components";
import { GoLocation} from "react-icons/go";
import {Link} from 'react-router-dom';
import { FaSearch} from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';



const product={
  border :"none", backgroundColor:"white", color:"black",fontFamily:"sans-serif",

}
const Container = styled.div`
  height: 60px;

  `;
  
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;


 `;


 

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;







const Center = styled.div`
width: 40%;  
  
  
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

const link={fontFamily:"sans-serif",color: "Black",
textDecoration: "none",transition: "0.5s"}



class Navbar extends Component {
  state = {  

    brandname:"DeV0gue",
    menu1:"Home",
    menu2:"Product",
    menu3:"Return Policy",
    menu4:"Contact us",
    item1:"Formal",
    item2:"Casual",
    item3:"Sandal/chappal",
                            item4:"Accessories" ,



  } 
  render() { 

 
    
        return (
            <div>
             
            <Container style={{backgroundColor: 'white' }}>
      <Wrapper>
       <Left         style={{color:'black', fontFamily:"sans-serif", fontSize:'2em', marginLeft:"50px"    }} >
         {this.state.brandname}
      
         
        </Left> 
        <Center >
        <div class="links-wrapper" style={{display:"flex", justifyContent:"space-between"}}>
                                 <div class="nav-link">
                                 <Link style={link} to="/homepage">{this.state.menu1}</Link>
                                 </div>
         
                                 <div class="nav-link">

                                 <Link  style={link} to="/formal"> {this.state.menu2}</Link>
                                 
                                 </div>
         
                                 <div class="nav-link">
                                 <Link style={link} to="/returnpolicy"> {this.state.menu3}</Link>
                                 </div>
         
                                 <div class="nav-link">
                                 <Link style={link} to="/contactus">{this.state.menu4}</Link>
                                 </div>
                                 
                          </div>
        
        </Center>
        <Right>
         
          
           {/* <FaSearch style={{color:"black"}}/> */}
         <Link to="/signup">   <FaUserAlt style={{color:"black"}} /></Link>
         <Link to="/Maps"     > 
<GoLocation   style={{color:"black"}} />
        
</Link>
<FaSearch/>
       
        </Right>
      </Wrapper>
    </Container>
  
            </div>
  )}};
    
 
export default Navbar;