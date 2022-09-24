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
    var countryOptions = [
        {value: 'USA', label: "United States of America"},
        {value: 'IND', label: "India"},
        {value: 'CHI', label: "China"},
        {value: 'CAN', label: "Canada"},
        {value: 'UK', label: "United Kingdom"},
        {value: 'AUS', label: "Australia"},
        {value :'None', label: 'None'}
    ];
    const [selectedCountry,updateData]= useState("Please pick a Country");
    const update = (e) =>{updateData(e.value)}
    const imageStyle = {width: '350px', height: '225px' };
    return (
        <div>
            <h1>Welcome to StudyEasy</h1>
            <button><img style={imageStyle} src={canadaflag}  /></button>
            <button><img style={imageStyle} src={chinaflag} /></button>
            <button><img style={imageStyle} src={indiaflag} /></button>
            <button><img style={imageStyle} src={UKflag} /></button>
            <button><img style={imageStyle} src={USAflag} /></button> 
            <button><img style={imageStyle} src={australiaflag} /></button>
        </div>);
};