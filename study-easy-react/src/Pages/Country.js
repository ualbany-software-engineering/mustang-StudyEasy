import { University } from "./University";
import React from 'react'
import Select from 'react-select'
import { useState } from "react";

export const Country = () => {
    var countryOptions = [
        {value: 'USA', label: "United States of America"},
        {value: 'IND', label: "India"},
        {value: 'CHI', label: "China"},
        {value :'None', label: 'None'}
    ];
    const [selectedCountry,updateData]= useState("Please pick a Country");
    const update = (e) =>{updateData(e.value)}
    return (
        <div>
            <h1>Title</h1>
            <Select options={countryOptions} value={selectedCountry} onChange={update} /> 
            {/* {countryOptions.map((country) => (<option value = {country.value}>{country.label}</option>))} */}
            {/* </Select> */}
           {selectedCountry==='None'? <h1>{selectedCountry}</h1>: <h1>Country Name:{selectedCountry}</h1>}
                
            <University country = {selectedCountry}/>
        </div>);
};

// const Temp =()=>{
//     return(
//         <div>
//             <h4>
//                 temp in country</h4>
//         </div>)
// }

/*
 <option value ="USA">United States of America</option>
    <option value = "IND">India</option>
    <option value = "CHI">China</option>
*/