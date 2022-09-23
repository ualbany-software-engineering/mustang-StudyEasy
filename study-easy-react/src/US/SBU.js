import React from 'react'
import Select from 'react-select';
import pic from './Stony.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const SBU = (props) => {
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
      <h1>Welcome to StonyBrook University</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>Stony Brook University (SBU), officially the State University of New York at Stony Brook, is a public research university in Stony Brook, New York. Along with the University at Buffalo, it is one of the State University of New York system's two flagship institutions.[9][10] Its campus consists of 213 buildings on over 1,454 acres (5.9 km2) of land in Suffolk County and it is the largest public university (by area) in the state of New York.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div><hr/>
      <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 40000$<br/>
          <h4>Scholarship:</h4> yes, 5000 $<br/>
        </ReadMore>
      
      <br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button></div>
    </>
  );
};
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 0) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "click here" : " close"}
      </span>
    </p>
  );
};
export default SBU;


