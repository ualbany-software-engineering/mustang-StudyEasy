import React from 'react'
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import './UAB.css';
import { useState} from "react";
import { Req } from "./Requirements/Req"

const Shanghai = (props) => {
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
      <h1>Welcome to Shanghai University</h1>
      <div class="img"><img src= "https://www.12consultants.com/wp-content/uploads/2022/03/Nanjing-University.jpg"/>
      <br />
      <p>Shanghai University, commonly referred to as SHU, or colloquially Shangda (Chinese: 上大; pinyin: Shàngdà), is a public research university located in Shanghai. The 555-acre main Baoshan campus is situated in the north of Shanghai, and there are two other campuses in Jiading and Jing'an. It is co-funded by Chinese Ministry of Education and Shanghai Municipal Government as part of the Project 211 and the Double First Class University Plan for leading national universities.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
             
             <Req course = {selectedcourse}/></p>
      </div><hr/>
      <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 70,000$<br/>
          <h4>Scholarship:</h4> yes, 10,000 $<br/>
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
      <span onClick={toggleReadMore} className="read_or_hide">
        {isReadMore ? "click here" : " close"}
      </span>
    </p>
  );
};
export default Shanghai;
