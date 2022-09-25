import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";
import '../styling/Country.css'


export const CHINA = () => {
  return (
    <div>
      <h1 className='h1'>Welcome to CHINA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="Peking University" Logo='https://mcdonnell.wustl.edu/wp-content/uploads/2020/10/PKU.png' zipCode={443211} url= "https://reactjs.org/docs/conditional-rendering.html"number={2}/>
    <College collegeName="Ming vu university " Logo='https://cdn-almjc.nitrocdn.com/aZYyrACOqPKwqacflNAAVPArFRYGkpZe/assets/static/optimized/rev-76f8472/wp-content/uploads/2020/07/46d82e1a0b0100936591de3958f3408d.Beijing-Normal-University-e1595868998763.jpg' zipCode={443200} url= "https://reactjs.org/docs/conditional-rendering.html"number={1}/>
  </div>
  </div>

  </div>
  )
}
