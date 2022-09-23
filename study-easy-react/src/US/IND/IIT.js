import React from 'react'
import Select from 'react-select';
import pic from './IIT.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const IIT = (props) => {
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
      <h1>Welcome to Indian Institutes of Technology</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>The Indian Institutes of Technology (IITs) are central government owned public technical institutes located across India. They are under the ownership of Ministry of Education, Government of India. They are governed by the Institutes of Technology Act, 1961, which has declared them as Institutes of National Importance and lays down their powers, duties, and framework for governance as the country's premier institutions in the field of Technology.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div><hr/>
      <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 60,000$<br/>
          <h4>Scholarship:</h4> NO<br/>
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
export default IIT;


