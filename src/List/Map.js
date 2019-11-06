import React, { Component } from 'react'
import axios from 'axios'

export default class Map extends Component {
  constructor(){
    super()
  
    axios.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAyEMuBiLJrxjEZjw_-SV-BEirGTuCRBOg&libraries=geometry,places`)
    .then((res) => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}