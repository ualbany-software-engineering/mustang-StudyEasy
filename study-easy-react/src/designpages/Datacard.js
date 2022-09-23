import React from 'react'
import { University } from '../Pages/University'
import '../styling/Datacard.css'
import { Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Datacard({title, logo, name}) {
  return (
    <div className = "datacard">
        <h1>{title}</h1>
        <img src = {logo} alt=""/>
        <Button component={Link} to="/Univ/USA"varitation = "contained" color="inherit"> press me </Button>
    </div>
  )
}

export default Datacard