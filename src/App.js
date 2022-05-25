
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landingpage from './Landingpage';
import ReturnPolicy from './ReturnPolicy';
import Signup from './Signup';
import NotFound from './NotFound';
import Orderdetails from './Orderdetails';
import Formal from "./Fromal";
import Maps from "./Maps";
import Cart from './cart/Cart';
import Register from './Register';
import Categories from './Categories';
import Contactus from './Contactus';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
 



 
   

<Routes>
<Route path="/homepage" element={<Landingpage />} /> 
  <Route path="/returnpolicy" element={<ReturnPolicy returnp="Return Policy" name1="Replacement:" name2="Refund:" />} /> 
  <Route path="/signup" element={<Signup />} /> 
  <Route path="/registered" element={<Orderdetails />} /> 
  <Route path="/NotFound" element={<NotFound />} /> 
  <Route path="*" element={<NotFound/>} />
  <Route path="/formal" element={<Formal />} /> 
  <Route path="/contactus" element={<Contactus />} /> 
  <Route path="/Cart" element={<Cart />} /> 
  <Route path="/register" element={<Register />} /> 
  <Route path="/categories" element={<Categories />} /> 
  <Route path="/Checkout" element={<Checkout />} /> 
  <Route path="/Maps" element={<Maps />} /> 
</Routes> 
    </div>
  );
}

export default App;
