import React from 'react'
import College from './College';
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';


export const CHINA = () => {
  return (
    <div>
       <Button className='btn' component={Link} to='/chinavisa' variant = "contained" color="inherit"  endIcon={<EastIcon/>}>China Visa Data</Button>
    <h1>Welcome to China</h1>
    <College collegeName="Peking University" city ="Beijing" zipCode={443211} url= "https://reactjs.org/docs/conditional-rendering.html"number={2}/>
    <College collegeName="Ming vu university " city ="Beijing" zipCode={443200} url= "https://reactjs.org/docs/conditional-rendering.html"number={1}/>

  </div>
  )
}
