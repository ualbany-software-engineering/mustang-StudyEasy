import React from 'react'
import Select from 'react-select';
import pic from './buffalo.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const SB = (props) => {
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
      <h1>Welcome to SUNY Buffalo</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>The State University of New York at Buffalo, commonly called the University at Buffalo (UB) and sometimes called SUNY Buffalo, is a public research university with campuses in Buffalo and Amherst, New York. The university was founded in 1846 as a private medical college and merged with the State University of New York system in 1962. It is the flagship institution of the SUNY system. As of fall 2020, the university enrolls 32,347 students in 13 schools and colleges, making it the largest and most comprehensive public university in the state of New York.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button></div>
    </>
  );
};

export default SB;