import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Slider from "./slider";

function Landingpage() {

   
  
   





    return (  
<div>

<Navbar   
   />

<hr></hr>

<div >

    <Slider />
</div>
<div >
    
<Categories  style={{marginTop:"100px"}}/>
</div>

<div style={{marginTop:"100px"}}>

    <Footer/>
</div>



</div>
    );
}

export default Landingpage;