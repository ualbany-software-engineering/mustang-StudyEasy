import React from 'react'
import {College} from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";


export const CHINA = () => {
  return (
    <div>
    <h1>Welcome to China</h1>
    <College collegeName="Peking University" city ="Beijing" zipCode={443211} url= "https://reactjs.org/docs/conditional-rendering.html"number={2}/>
    <College collegeName="Ming vu university " city ="Beijing" zipCode={443200} url= "https://reactjs.org/docs/conditional-rendering.html"number={1}/>

  </div>
  )
}
