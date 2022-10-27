import React, { useState, useEffect, Suspense, lazy } from "react";
import { UserCard } from 'react-ui-cards';
import img from "../../../../images/unibg.jpg";


export const Unicard = ({uni, link}) => {

  return (
    <div className='container datarec'>
        {/* <p>
         <a href={link}>{uni}</a>
        </p> */}
        <UserCard
        float
        href={link}
        name={uni}
        header = {img}
        avatar="https://cdn3.vectorstock.com/i/1000x1000/53/22/college-symbol-icon-design-vector-31955322.jpg"
        />
    </div>
  )
}
