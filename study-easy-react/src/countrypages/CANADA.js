import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import '../styling/Country.css'
import Nav from '../designpages/Nav'


export const CANADA = () => {
  return (
    <div>
      <Nav given = 'country' link = '/canadavisa' link1 = "/Univ/CAN"/>
      <h1 className='h1'>Welcome to CANADA</h1><div className='Country'>
    <div className='Country'>
    <College collegeName="University of Toronto" Logo='http://wawh.wpengine.com/wp-content/uploads/2015/08/university_of_toronto.jpg' zipCode={"M5S1A4"} url= "https://www.utoronto.ca/"number={2}/>
    <College collegeName="McGill University" Logo='https://media.cntraveler.com/photos/619bcd86d9ed3a3b53b8bd52/16:9/w_2560,c_limit/McGill%20University_GettyImages-1341263605.jpg' zipCode={"H3A0G4"} url= "https://www.mcgill.ca/"number={1}/>
  </div>
  </div>

  </div>
  )
}