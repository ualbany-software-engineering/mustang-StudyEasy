import React from 'react'
import Select from 'react-select';

import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"


const McG = (props) => {
  var courseOptions = [
    {value: 'CS', label: "Computer Science"},
    {value: 'DS', label: "Data Science"},
    {value: 'IS', label: "Informational Sciences"}
];
const [selectedcourse,updateData]= useState("Please pick a Course");
const update = (e) =>{updateData(e.value)}
  const navigate = useNavigate();

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
    <div className='UAB'>
      <h1>Welcome to McGill University</h1>
      <div class="img"><img src="https://media.cntraveler.com/photos/619bcd86d9ed3a3b53b8bd52/16:9/w_2560,c_limit/McGill%20University_GettyImages-1341263605.jpg"/>
      <br />
      <p>McGill University (French: Université McGill) is an English-language public research university located in Montreal, Quebec, Canada. Founded in 1821 by royal charter granted by King George IV,[10] the university bears the name of James McGill, a Scottish merchant whose bequest in 1813 formed the university's precursor, University of McGill College (or simply, McGill College); the name was officially changed to McGill University in 1885.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div>
    <hr/>
    <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 90,000$<br/>
          <h4>Scholarship:</h4> yes, 20000 $<br/>
        </ReadMore>
      
      <br/><br/><br/><button onClick={() => navigate(-1)}>Go Back</button></div>
      </div>
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
      <span onClick={toggleReadMore} className="read_or_hide">
        {isReadMore ? "click here" : " close"}
      </span>
    </p>
  );
};
export default McG;