import React from 'react'
// import Datacard from './Datacard';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styling/bodytab.css';
// import videobg from '../images/background/edited.mp4';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

function Bodytab() {

  return (
    
    <div className='bodystyle'>
       <Button className='Link' component={Link} to="/Country" variant = "contained" color="inherit"  endIcon={<EastIcon/>}>
          Get Started
       </Button>
    </div>
  )

}

export default Bodytab;