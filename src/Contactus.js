import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";
class Contactus  extends Component {
    state = { 
name:"Contact Us",
email:"Email",
id:"devoguestore@gmail.com",
fb:'FaceBook',
link1:"https://www.facebok.com/devoguestore/",
insta:"Instagram",
link2:"https://www.instagram.com/devoguestore/",
mobile:"031062222370",
phone:"Phone",
add:"Address",
detail:"DeVogue Store, MA Jinnah Road,Okara"    } 
    render() { 
        return (
            
<div>
<Navbar/><hr></hr>
<h2  style={{marginTop:"30px"}}  >{this.state.name}</h2>
<h5>{this.state.email}</h5>

<p>{this.state.id}</p>
<h5>{this.state.fb}</h5>

<Link to="/https://www.facebok.com/devoguestore/"><p>{this.state.link1}</p></Link>
<h5>{this.state.insta}</h5>

<Link to="/https://www.instagram.com/devoguestore/"><p>{this.state.link2}</p></Link>

<h5>{this.state.phone}</h5>

<p>{this.state.mobile}</p>

<h5>{this.state.add}</h5>

<p>{this.state.detail}</p>




<br></br>
<br></br>
<Footer/>

</div>

        );
    }
}
 
export default Contactus ;
