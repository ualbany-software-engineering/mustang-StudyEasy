import { University } from "./University";
import React from 'react';
import Select from 'react-select';
import { useState } from "react";
import canadaflag from "../Pages/images/canadaflag.png";
import australiaflag from "../Pages/images/australiaflag.png";
import chinaflag from "../Pages/images/chinaflag.png";
import indiaflag from "../Pages/images/indiaflag.png";
import UKflag from "../Pages/images/UKflag.png";
import USAflag from "../Pages/images/USAflag.png";

export const Country = () => {
    
    const [selectedCountry,updateData]= useState(false);
    const update = (e) =>{updateData(e.value)}
    const imageStyle = {width: '350px', height: '225px' };
    return (
        <div>
            <h1>Welcome to StudyEasy</h1>
            <button></button>
            <h1>Canada</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={canadaflag}  /></button>
            {selectedCountry ? <University country = 'CAN'/>: null}
            <h1>China</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={chinaflag} /></button>
            {selectedCountry ? <University country = 'CHI'/>: null}
            <h1>India</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={indiaflag} /></button>
            {selectedCountry ? <University country = 'IND'/>: null}
            <h1>United Kingdom</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={UKflag} /></button>
            {selectedCountry ? <University country = 'UK'/>: null}
            <h1>USA</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={USAflag} /></button> 
            {selectedCountry ? <University country = 'USA'/>: null}
            <h1>Australia</h1>
            <button onClick={()=>{updateData(!selectedCountry)}}><img style={imageStyle} src={australiaflag} /></button>
            {selectedCountry ? <University country = 'AUS'/>: null}
        </div>);
};