import React from 'react'
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const UC = (props) => {
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
    <div className='UAB'>
      <h1>Welcome to University of Cambridge</h1>
      <div class="img"><img src="https://saltosystems.com/sites/default/files/styles/breakpoint_1920/public/images/case-studies/education-case-cambridge-00_0.jpg?itok=5JrTeXFn"/>
      <br />
      <p>The University of Cambridge is a collegiate research university in Cambridge, United Kingdom. Founded in 1209[9] and granted a royal charter by Henry III in 1231, Cambridge is the world's third oldest surviving university and one of its most prestigious, currently ranked second best in the world and best in Europe by QS World University Rankings.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div><hr/>
      <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 75,000$<br/>
          <h4>Scholarship:</h4> NO<br/>
        </ReadMore>
      
      <br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button></div>
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
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "click here" : " close"}
      </span>
    </p>
  );
};
export default UC;
