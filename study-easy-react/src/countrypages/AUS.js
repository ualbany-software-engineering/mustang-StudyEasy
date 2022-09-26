import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";
import '../styling/Country.css'


export const AUS = () => {
  return (
    <div>
      <h1 className='h1'>Welcome to AUSTRALIA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="University of Melbourne" Logo='https://img.emg-services.net/institutes/institute3393/uom-header.jpg' zipCode={3010} url= "https://www.unimelb.edu.au/" name = "/UM" number={1}/>
    <College collegeName="University of Sydney" Logo='https://www.sydney.edu.au/content/dam/corporate/images/architecture/quadrangle/high-quad-shot2.jpg' zipCode={2006} url= "https://www.sydney.edu.au/"  name = "/USyd" number={2}/>
  </div>
  </div>

  </div>
  )
}