import React, { useState, useEffect, Suspense, lazy } from "react";
import { UserCard } from 'react-ui-cards';
import img from "../../../images/unibg.jpg";


export const Visacard = ({uni, data, necessary}) => {

  return (
    <div className='container datarec'>
        {/* <p>
         <a href={link}>{uni}</a>
        </p> */}
        {/* <UserCard
        float
        data={link} */}
        {uni}<p><br/></p>
        {data}<p><br/></p>
        {necessary}
        {/* data={data}
        /> */}
    </div>
  )
}
