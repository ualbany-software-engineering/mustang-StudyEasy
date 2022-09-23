import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";

export const INDIA = () => {
  return (
    <div>
          <h1>Welcome to USA </h1>
          <College collegeName="UAblany" city="Albany" zipCode={12345} url= "https://albany.edu/" number={1}/>
          <College collegeName= "ULosAngles" city = "Los Angles" zipCode={99993} url ="https://www.programiz.com/python-programming/time/sleep" number={2}/>
     </div>
  )
}
