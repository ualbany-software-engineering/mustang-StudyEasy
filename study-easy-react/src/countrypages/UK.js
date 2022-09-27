import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import '../styling/Country.css'
import Nav from '../designpages/Nav'


export const UK = () => {
  return (
    <div>
      <Nav given = 'country' link = '/ukvisa' link1 = "/Univ/UK"/>
      <h1 className='h1'>Welcome to the UK</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="University of Cambridge" Logo='https://saltosystems.com/sites/default/files/styles/breakpoint_1920/public/images/case-studies/education-case-cambridge-00_0.jpg?itok=5JrTeXFn' zipCode={"CB21TN"} url= "https://www.cam.ac.uk/" name = "/UT"  number={1}/>
    <College collegeName="University of Oxford" Logo='https://cdn.britannica.com/03/117103-050-F4C2FC83/view-University-of-Oxford-England-Oxfordshire.jpg' zipCode={"OX12JD"} url= "https://www.ox.ac.uk/" name = "/UO" number={2}/>
  </div>
  </div>

  </div>
  )
}