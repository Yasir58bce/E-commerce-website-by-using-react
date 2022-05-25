import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./categories.css"

class Categories extends Component {
    state = { 
text1:"WITH A LEGACY",
text2:"one of the oldest leather goods brands in the world.",
item1:"Formal Shoes",
item2:"Casual Shoes",
item3:"Sandal",
item4:"Accessories",
btn:"view"     } 
    render() { 
        return (
<div style={{marginTop:"50px"}}>
<h2 style={{fontFamily:"cursive"}}>The ART OF GIFTING</h2>
<h4>  Gift are certain to bring SMILE on your loved one's face  </h4>

<div style={{display:"flex"}}>
 {/* 1sat group */}

           <div className='wrapper col-md-6'>



         <Link to="/formal"> <div className="cards">
          <div className="">
            <img src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/20759/182796/DXKZMCM-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Wedding-Shoes-Men-Oxford-Shoes-Big-Size__54757.1545974467.jpg?c=2?imbypass=on" class="card__image" />
           
          </div>
        
        </div>
        </Link>
{/* card 2 */}

<Link to="/formal">
<div className="cards">
          <div className="card__body">
            <img src="https://assets.entrepreneur.com/images/misc/1540796815_4.jpg" class="card__image" />
           

          </div>
          
        </div>
</Link>
{/* card 3 */}

{/* card 4 */}

        </div>
        
{/* ist group end  */}



{/* second group start */}
        
        <div  className='col-md-6 wrapper'>

        <div className=''>

        <Link to="/formal">

<div className="cards">
<div className="">
  <img src="https://assets.entrepreneur.com/images/misc/1540796620_5.jpg?width=1000" class="card__image" />
 
</div>

</div>
</Link>
{/* card 2 */}

<Link to="/formal">

<div className="cards">
<div className="card__body">
  <img src="https://image.shutterstock.com/image-photo/male-classic-shoes-mens-fashion-600w-1798951789.jpg" class="card__image" />
 

</div>

</div>
</Link>
{/* card 3 */}

{/* card 4 */}

</div>


        </div>
        
        
        </div>
        
<div>

<h6 className=''    style={{marginTop:"100px", marginLeft:""}}>Charm any place that you walk into with 
</h6>
<h1 className='' style={{ marginLeft:""}}>OUR Handcrafted Designs</h1>

</div>





        </div> );
    }
}
 
export default Categories;