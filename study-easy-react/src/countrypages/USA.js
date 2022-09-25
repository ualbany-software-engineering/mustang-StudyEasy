import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import '../styling/Country.css'

export const USA = () => {
  return (
  <div>
      <h1 className='h1'>Welcome to USA</h1><div className='Country'>
    <div className='Country'>
      <College collegeName="UAblany" Logo='https://www.uniquevenues.com/sites/uniquevenues.com/files/imagecache/venue_flexslider_2018/venues/slideshow/CC-8-X2.jpg' zipCode={12345} url="https://albany.edu/" number={1} />
      <College collegeName="New York University" Logo='https://publichealth.nyu.edu/sites/default/files/2020-04/header-get-started.jpg' zipCode={99993} url="https://www.programiz.com/python-programming/time/sleep" number={2} />
    </div>
  </div>
  </div>

  )
}
