import styled from "styled-components";
// import { mobile } from "../responsive";
import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "formik";

 import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://assets.entrepreneur.com/images/misc/1540796620_5.jpg?width=1000")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction: row;  
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;




const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
      
function Register({ errors, touched, isValid, dirty }) {
  console.log(errors);
  const navigate = useNavigate();
  return (
    <Container>
     
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form style={{display: "flex",
  flexWrap: "wrap"}}>
       
          
          <Field


          placeholder="contact number"
          name="contact"
          className={
            touched.contact
              ? `form-control ${errors.contact ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.contact && errors.contact && (
          <small className="text-danger">{errors.contact}</small>
        )}
          
          
          <Field
           placeholder=" user email address"
          name="email"
          className={
            touched.email
              ? `form-control ${errors.email ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.email && errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}

<Field
  placeholder=" username"
          name="username"
          className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}


<Field
  placeholder=" password"
          name="password"
          className={
            touched.password
              ? `form-control ${errors.password ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.password && errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}







         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SIGN UP</Button>
        </Form>
      </Wrapper>


      &nbsp;  &nbsp;
      &nbsp;

 <Wrapper>
        <Title>LOGIN ACCOUNT</Title>
        <Form style={{display: "flex",
  flexWrap: "wrap"}}>
         
<Field
  placeholder=" loginusername"
          name="loginusername"
          className={
            touched.loginusername
              ? `form-control ${errors.loginusername ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.loginusername && errors.loginusername && (
          <small className="text-danger">{errors.loginusername}</small>
        )}


<Field
  placeholder=" password"
          name="loginpassword"
          className={
            touched.loginpassword
              ? `form-control ${errors.loginpassword ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.loginpassword && errors.loginpassword && (
          <small className="text-danger">{errors.loginpassword}</small>
        )}
          <Button   
          
          disabled={!isValid || !dirty}
          onClick={()=> navigate("/registered")}
          
          >LOGIN</Button>
        
        
        </Form>
      </Wrapper>

    </Container>
  );
};

export default Register;