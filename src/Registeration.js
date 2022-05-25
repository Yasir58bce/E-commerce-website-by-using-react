import React from "react";

import { Form, Field, Formik } from "formik";

import { useNavigate } from "react-router-dom";

function Registeration({ errors, touched, isValid, dirty }) {
   console.log(errors);
   const navigate = useNavigate();
// const FILE_SIZE=160*1024;




  return (

   

    <Form style={{textAlign:"left", marginLeft:"500px"}}>
     
     <div className="form-group">
        <label className="col-form-label" >Contact Number </label>
       <br></br>
        <Field
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
      </div>
     <br></br>
     {/* for email */}
      <div className="form-group">
        <label className="col-form-label" >Email </label>
       <br></br>
        <Field
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
      </div>
      <hr></hr>
<h5 style={{marginTOP:"30px"}}>Shipping Details</h5>
<hr></hr>
{/* for name  */}

      <div className="form-group" style={{marginTOP:"30px"}}>
        <label className="col-form-label" style={{backgroundColor:"black", color:"white"}} >username</label>
        <br></br>
        <br></br>
        <Field
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
      </div>
<br></br>

      {/* for paymentmethod */}
      <div className="form-group" style={{marginTOP:"0px"}}>
        <label className="col-form-label" style={{backgroundColor:"black", color:"white"}}> Payment Method </label>
        <br></br><br></br>
        <Field   as="select" 
          name="paymentmethod"
          className={
            touched.paymentmethod
              ? `form-control ${errors.paymentmethod ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"

        >
           
        <option value="Invalid"></option>
        <option >Credit/Debit card payments</option>
        <option>Cash on Delivery</option>
        
   
          </Field> 
        {touched.paymentmethod && errors.paymentmethod && (
          <small className="text-danger">{errors.paymentmethod}</small>
        )}
      </div>

{/* for gender */}
<br></br>
<div style={{marginTOP:"30px"}}>
      <label className="col-form-label" style={{backgroundColor:"black", color:"white"}}>Gender</label>
          <div role="group" aria-labelledby="my-radio-group" style={{display:"felx", flexDirection:"row"}}>
            <label>
            <br></br><br></br>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            
            {touched.gender && errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}
            
          </div>
</div>
        {/* for date  */}
        <br></br>

          
          <label className="col-form-label" style={{backgroundColor:"black", color:"white"}}>Preferred Date </label>
          <br></br><br></br>
          <div role="group" aria-labelledby="my-radio-group">
            
            <label>
              <Field type="radio" name="date" value="22-11-2021" />
              22-11-2021
            </label>
            <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span>
            <label >
              <Field type="radio" name="date" value="25-11-2021" />
              25-11-2021
            </label>
            <br/>
            {touched.date && errors.date && (
          <small className="text-danger">{errors.date}</small>
        )}
            
          </div>

{/* for checkbox */}
          
          
          <label className="col-form-label" style={{backgroundColor:"black", color:"white"}}></label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="checkbox" name="Checkbox" value="GiftBox" />
              Save Information
            </label>
           <br></br>
            <label>
              <Field  type="checkbox" name="Checkbox" value="GiftCard" />
              Read all requirment
            </label>
            <br></br>
            
            <br/>
            {touched.Checkbox && errors.Checkbox && (
          <small className="text-danger">{errors.Checkbox}</small>
        )}
            
          </div>
     
          <button 
        type="Register"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
         onClick={()=> navigate("/registered")}
      >
        submit
      </button>
     

      
    </Form>
  );
}

export default Registeration;