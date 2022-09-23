import React from 'react'
import Select from 'react-select';
import pic from './NIT.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"


const NIT = (props) => {
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
      <h1>Welcome to National Institute of Technology</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>National Institute of Technology Warangal (NIT Warangal or NITW) is a public technical and research university located in Warangal, India. It is recognised as an Institute of National Importance by the Government of India. The foundation stone for this institute was laid by then Prime Minister Jawaharlal Nehru on 1959, the first in the chain of 31 NITs (formerly known as RECs) in the country.[3] The institute was renamed as the National Institute of Technology, Warangal in 2002</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div>
    <hr/>
    <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 50,000$<br/>
          <h4>Scholarship:</h4> yes, 9000 $<br/>
        </ReadMore>
      
      <br/><br/><br/><button onClick={() => navigate(-1)}>Go Back</button></div>
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
export default NIT;
