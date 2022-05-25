import styled from "styled-components";
import { PopularProducts } from "../Popularproducts";
import Product from "../cart/Product";
import Slider2 from "../Slider2";





const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ handleClick }) => {
  
  return (
    <div>


<Slider2/>


    <div className="cartwrapper">

      {PopularProducts.map((item) => (

        <Product item={item} key={item.id} handleClick={handleClick}/>
      ))}
    </div></div>
  );
};

export default Products;