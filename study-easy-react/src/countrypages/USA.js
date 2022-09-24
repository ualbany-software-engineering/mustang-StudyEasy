import React from 'react'
import College from './College';
import { Majors } from "../components/Majors";
import {useState} from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';


export const USA = () => {
  return (
    <div>
  <Button className='btn' component={Link} to='/Usavisa' variant = "contained" color="inherit"  endIcon={<EastIcon/>}>Usa Visa Data</Button>
    <h1>Welcome to India</h1>
    <College collegeName="H.Tech Ashoka" city ="New Delhi" zipCode={9091321} url= "https://fastapi.io" number={1}/>
    <College collegeName="Darius" city ="Pune" zipCode={19123321} url= "https://www.robinwieruch.de/react-dropdown/" number={2}/>
    </div>
  )
}
