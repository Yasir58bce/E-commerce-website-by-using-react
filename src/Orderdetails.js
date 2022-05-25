import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
class Orderdetails extends Component {
    state = {  } 
    render() { 
        return (

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Registration</th>
      <th>Program</th>
      <th>gender</th>
      <th>Preffered Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>fa18-bce-058</td>
      <td>BCE</td>
      <td>Male</td>
      <td>13-10-2022</td>
    </tr>
   
  </tbody>
</Table>


        );
    }
}
 
export default Orderdetails;