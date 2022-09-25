import React from 'react'
import Logo from '../assets/logo1.jpg';
import {Link} from "react-router-dom";
//import ReorderIcon from '@mui/icons-material/Reorder';
import '../styling/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide '>
          <div >
          <Link to="/"><img src={Logo} className='logoImage'  alt="my-logo"></img></Link>
            
          </div>
          
        </div>
        <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/gre">GRE</Link>
          <Link to="/ielts">IELTS</Link>
          <Link to="/gmat">GMAT</Link>
        </div>
    </div>
  )
}

export default Navbar