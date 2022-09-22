import React from 'react'
import Select from 'react-select';
import pic from './ula.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const ULA = (props) => {
  var courseOptions = [
    {value: 'CS', label: "Computer Science"},
    {value: 'DS', label: "Data Science"},
    {value: 'IS', label: "Informational Sciences"}
];
const [selectedcourse,updateData]= useState("Please pick a Course");
const update = (e) =>{updateData(e.value)}
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to University of California, Los Angeles</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>The University of California, Los Angeles (UCLA)[13] is a public land-grant research university in Los Angeles, California. UCLA’s academic roots were established in 1881 as a teachers college then known as the southern branch of the California State Normal School (now San José State University). This school was absorbed with the official founding of UCLA as the Southern Branch of the University of California in 1919, making it the second-oldest of the 10-campus University of California system </p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/>
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button></div>
    </>
  );
};

export default ULA;