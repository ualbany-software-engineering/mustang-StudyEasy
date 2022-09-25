import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";
import '../styling/Country.css'

export const INDIA = () => {
  return (
    <div>
    <h1 className='h1'>Welcome to INDIA</h1><div className='Country'>
  <div className='Country'>
    <College collegeName="H.Tech Ashoka" Logo='https://upload.wikimedia.org/wikipedia/commons/b/bf/Madrasuni.jpg' zipCode={9091321} url= "https://fastapi.io" number={1}/>
    <College collegeName="Darius" Logo='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/640px-College_Full_view-1.jpg' zipCode={19123321} url= "https://www.robinwieruch.de/react-dropdown/" number={2}/>
    </div>
    </div>
    </div>
  )
}
