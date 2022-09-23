import React from 'react'
import Select from 'react-select';
import pic from './IIS.jpeg';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const IIS = (props) => {
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
      <h1>Welcome to Indian Institute of Science</h1>
      <div class="img"><img src={pic}/>
      <br />
      <p>The Indian Institute of Science (IISc) is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in Bengaluru, in the Indian state of Karnataka. The institute was established in 1909 with active support from Jamsetji Tata and thus is also locally known as the "Tata Institute".[5] It is ranked among the most prestigious academic institutions in India[6] and has the highest citation per faculty among all the universities in the world.[7] It was granted the deemed to be university status in 1958 and the Institute of Eminence status in 2018.</p>
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
export default IIS;