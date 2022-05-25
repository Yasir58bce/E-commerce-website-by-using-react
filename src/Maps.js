import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends React.Component {
constructor(props){
  super(props);
  this.state={
lat: 46.4324234324,
lng:56.324324342343,
userAddress:null,
  }

this.getLocation=this.getLocation.bind(this);
this.getCoordinates=this.getCoordinates.bind(this);


}
getLocation(){

  if(navigator.geolocation){

    navigator.getLocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
  }
  else{
alert  ("not supported ");

  }
}

getCoordinates(Position){
  console.log(Position.coords.lat);
  this.setState({
lat:Position.coords.lat,
lng:Position.coords.lng,

  })
}

handleLocationError(error){
switch(error.code){
  case error.PERMISSION_DENIED:
    alert  (" USER DENIED PERMISSION ");
break;

case error.POSITION_UNAVAILABLE:
  alert  (" LOCATION INFO UNAVAILABLE ");
break;

case error.TIMEOUT:
  alert  ("  TIME OUT ");
break;

case error.UNKNOWN_ERROR:
  alert  (" UNKNOWN ERROR ");
break;
default:
  alert  (" error ");

}



}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
<h2>example</h2>
<button  onClick={this.getLocation}> get cordinats</button>
<h5>html cordinates</h5>
<p>lattide :{this.state.lat}</p>
<p>longitude :{this.state.lng}</p>
<h4>googlr maps reverse geocodinf</h4>
<p>address :{this.state.userAddress}</p>
{
this.state.lat && this.state.lng ?
<img src={''}/>
:null



}

      </div>
    );
  }
}

export default Maps;