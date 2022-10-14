import React from 'react'
import Select from 'react-select';
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

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
    <div className ="UAB">
      <h1>Welcome to University at Albany</h1>
      <div className="img"><img src="https://www.uniquevenues.com/sites/uniquevenues.com/files/imagecache/venue_flexslider_2018/venues/slideshow/CC-8-X2.jpg"/>
      <br />
      <p>info ......The State University of New York at Albany, commonly referred to as the University at Albany, UAlbany or SUNY Albany, is a public research university with campuses in Albany, Rensselaer, and Guilderland, New York. Founded in 1844, it is one of the four "university centers" of the State University of New York (SUNY) system.[6][7][8]

The university enrolls 17,944 students in nine schools and colleges, which offer 50 undergraduate majors and 125 graduate degree programs.[9] The university's academic choices include new and emerging fields in public policy, homeland security, globalization, documentary studies, biotechnology, and informatics.</p>
      <div class="req">
        <h2> <hr />Admission Requirements</h2>
        <p><Select options={courseOptions} value={selectedcourse} onChange={update} /> 
            
            <Req course = {selectedcourse}/>
            {selectedcourse==='None'? <h1>{selectedcourse}</h1>: <h1></h1>}
        </p> 
      </div>
    <hr/>
    <h3>To view fee structure</h3>
      <ReadMore>
      
          <h4>Total estimated Fees:</h4> 40000$<br/>
          <h4>Scholarship:</h4> yes, 5000 $<br/>
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
export default UAB;