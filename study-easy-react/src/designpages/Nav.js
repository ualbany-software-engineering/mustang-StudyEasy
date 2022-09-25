import React from 'react'
import "../styling/Nav.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

const Nav = (props) => 
{
  const given = props.given;
  const Linker = props.link;
  const Linker1 = props.link1;
  if (given === 'country') {
    return (
      <div className='nav'>
        <h2><Link style={{ textDecoration: 'none' , color: 'white'}} to={Linker1}>Universities</Link></h2>
        <h2><Link style={{ textDecoration: 'none' , color: 'white'}} to={Linker}> Visa Data</Link></h2>
      </div>
    );
  }
  else if (given === 'uni') {
    return (
      <div className='nav'>
        <h2>Courses</h2>
        <h2>Admission Process</h2>
        <h2>Fee structure</h2>
      </div>
    );
  }

  else {
    return (
      <div>messed</div>
    );
  }
}

export default Nav;