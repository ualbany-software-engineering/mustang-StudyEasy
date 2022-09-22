import React from 'react'
import Select from 'react-select';
import pic from './ualbany.webp';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"



const UAB = (props) => {
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
      <h1>Welcome to University at Albany</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>info ......The State University of New York at Albany, commonly referred to as the University at Albany, UAlbany or SUNY Albany, is a public research university with campuses in Albany, Rensselaer, and Guilderland, New York. Founded in 1844, it is one of the four "university centers" of the State University of New York (SUNY) system.[6][7][8]

The university enrolls 17,944 students in nine schools and colleges, which offer 50 undergraduate majors and 125 graduate degree programs.[9] The university's academic choices include new and emerging fields in public policy, homeland security, globalization, documentary studies, biotechnology, and informatics.</p>
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

export default UAB;