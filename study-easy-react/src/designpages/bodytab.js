import React from 'react'
// import Datacard from './Datacard';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './bodytab.css';
import videobg from '../images/background/edited.mp4';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Editing from './editingcheck.js';

function Bodytab() {
  const navigate = useNavigate();
  return (
    <div className='bodystyle'>
        <Button  onClick={() => navigate("/Editing")} className='button' color="success" variant="contained" endIcon={<EastIcon />} >
            Get Started
        </Button>

         <video width="1705px" autoPlay loop muted id="video">
         <source src={videobg} type="video/mp4" />
        </video>
    </div>
  )

}

export default Bodytab;