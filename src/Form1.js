import { Formik } from "formik";

  import Registeration from "./Registeration";
  import * as Yup from "yup";


  function Form1 (props) {


    const ErrorSchema = Yup.object().shape({
      contact: Yup.string().matches( /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
      ,"incorrect"),

      password: Yup.string()
      .matches(/^[0-9A-Za-z]*[!@#V%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9A-Za-z]*$/,"password must have special character").min(8).max(12),
     loginpassword: Yup.string()
      .matches(/^[0-9A-Za-z]*[!@#V%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9A-Za-z]*$/,"password must have special character").min(8).max(12),

      loginusername: Yup.string()
      .matches(/^[0-9A-Za-z]*[!@#V%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9A-Za-z]*$/,"username incorret (special character)"),
    
      email: Yup.string().email('invalid')
          .required("*Enter you E-mail"),

          username: Yup.string()
          .matches(/^[0-9A-Za-z]*[!@#V%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9A-Za-z]*$/,"username incorret (special character)"),


        paymentmethod: Yup.string()
          .required("* select Payment Method"),
          
        gender: Yup.string()
        .required("* Select Gender"),

        date: Yup.string()
          .required("* Select Preferred Date"),
       
          checkbox: Yup.array()
                   .required("* Select atleast one")
      });

return(

  
<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>


   
         
        <Formik
          
          initialValues={{
            loginpassword: "",
            loginusername: "",
            password: "",
            contact:"", 
         email: "",
         username: "",
         paymentmethod: "",
            gender: "",
            date: "",
            checkbox: [],
          }}
          onSubmit={(value, { resetForm }) => {
               console.log(value);
            
            resetForm();
          }}
          validationSchema={ErrorSchema}
          component ={Registeration}
        
         
        />


   


      </div>

);


}
 export default Form1;
