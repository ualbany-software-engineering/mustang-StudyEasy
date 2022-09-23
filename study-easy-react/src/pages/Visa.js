import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import indiaflag from '../images/indian_flag.png';
import usaflag from '../images/usa_flag.png';
import canadaflag from '../images/canada_flag.png';
import chinaflag from '../images/china_flag.png';
import ukflag from '../images/uk_flag.png';
import '../styling/Visa.css';

function Visa() {
    return (
        <div>
        <div className="container">
        <a href="/India" className='links linkindia'>
            <img className='img' src={indiaflag}/><div className='overlay unselectable'>INDIA</div></a> </div>
        <div className="container">
        <a href="/Usa" className='links linkindia'>
            <img className='img' src={usaflag}/><div className='overlay unselectable'>USA</div></a></div>
        <div className="container">
        <a href="/Canada" className='links linkindia'>
            <img className='img' src={canadaflag}/><div className='overlay unselectable'>CANADA</div></a></div>
        <div className="container">
        <a href="/China" className='links linkindia'>
            <img className='img' src={chinaflag}/><div className='overlay unselectable'>CHINA</div></a></div>
        <div className="container">
        <a  href="/Uk" className='links linkindia'>
            <img className='img' src={ukflag}/><div className='overlay unselectable'>UK</div></a></div>
       
    </div>
    )
}
export default Visa;