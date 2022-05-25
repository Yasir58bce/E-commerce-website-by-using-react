import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
 import { FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa';
 
 


 const Container = styled.div`
 display: flex;

`;

const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
 margin: 20px 0px;
`;



const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: white;

 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
`;

const Center = styled.div`
 flex: 1;
 padding: 20px;
align-items: center;
`;

const Title = styled.h3`
 margin-bottom: 30px;
`;

const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;

`;

const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
 margin-left:90px;
 
 `;

const Right = styled.div`
 flex: 1;
 padding: 20px;

`;

const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex;
 align-items: center;
`;

const Payment = styled.img`
   width: 50%;
`;

class Footer extends Component {
    state = { 
        logo:"DeVogue",
    des:"De Vogue is delivering results since day one. Our goal is to provide both a superior customer experience and tremendous value for our customers. We offer handcrafted pure leather formal shoes and casual shoes. Our collection of leather sole is exemplar quality and value." 
,
links:"Useful Links"    ,
link1:"Home",
  link2:"Product",
link6:"My Account",
link7:"Cart",
link8:"Contact us",
link9:"Return Policy",
contact:"contact us",
email:"devoguestore@gmail.com",
number:"0307-8011786",
address:"DeVogue, Muhammad Ali Jinnah Rd, Okara, Punjab, Pakistan",} 
    render() { 
        return (

 <Container>
        <Left>
          <Logo>{this.state.logo}</Logo>
          <Desc>
            {this.state.des}
          </Desc>
          <div style={{display:"flex", justifyContent:"space-between"}}>
         <Link to="https://www.facebook.com/devoguestore/">
          <FaFacebookSquare  size= "2em"/></Link>
          <Link to="https://www.instagram.com/devoguestore/">  < FaInstagramSquare  size= "2em"/></Link>
         </div>
        </Left>
        <Center>
          <Title>{this.state.links}</Title>
          <List>
       <Link  to="/homepage"  >    <ListItem>{this.state.link1}</ListItem></Link> 
       <Link   to="/formal">      <ListItem>{this.state.link2}</ListItem></Link> 
       <Link   to="/signup">      <ListItem>{this.state.link6}</ListItem></Link> 

       <Link   to="/contactus">       <ListItem>{this.state.link8}</ListItem></Link> 
       <Link  to="/returnpolicy">      <ListItem>{this.state.link9}</ListItem>;</Link> 
          </List>
        </Center>
        <Right>
          <Title>{this.state.contact}</Title>
          <ContactItem>
          {this.state.email}
          </ContactItem>
          <ContactItem>
            {this.state.number}
          </ContactItem>
          <ContactItem>
           {this.state.address}
          </ContactItem>
       
        </Right>
      </Container>



        );
    }
}
 
export default Footer;