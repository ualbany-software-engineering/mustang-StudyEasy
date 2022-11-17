import React, { useState, useEffect, Suspense, lazy } from "react";
import { UserCard } from 'react-ui-cards';
import { GreaterEqualDepth } from "three";
import img from "../../../images/unibg.jpg";
import './visa.css'

export const Visacard = ({uni, data, necessary}) => {
// console.log(necessary.split(","));
// var necessary = necessary.split("\n").join("<br/>");
// var str1=necessary.split(",");
// var len=str1.length;
// console.log(necessary);
  return (
    <div className='container datarec'>
      
        {/* <p>
         <a href={link}>{uni}</a>
        </p> */}
        {/* <UserCard
        float
        data={link} */}
        <div className="process">
          <div className="visahead">
        <h3>Application Process</h3></div>
        <br/>
        {/* {uni}<p><br/></p> */}
        <div className="visadata">
          {data}
        {/* {data.split(".").join("<br>")} */}
        </div></div>
        <br/>
        <div className="req">
        <div className="visahead">
        <h3>Application Requirements</h3></div>
        <br/>
        <div className="visadata">
        {necessary}
        
        {/* {necessary.split(",").join(str1)} */}
        {/* {necessary.map((item)=>
        <p key={item.something_unique}>{item}</p>)} */}
        </div></div>
        {/* data={data}
        /> */}
        
    </div>
  )
}
