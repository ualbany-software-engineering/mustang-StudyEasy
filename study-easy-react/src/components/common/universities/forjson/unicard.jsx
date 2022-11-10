import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router";
import { UserCard } from 'react-ui-cards';
import img from "../../../../images/unibg.jpg";
import {db} from "../../../../firbase-config.js";
import { collection, addDoc } from "firebase/firestore";

export const Unicard = ({count,uni, link}) => {
 
  const navigate = useNavigate();
  const myDBCollectionRef = collection(db, "visitedData");
  const data = JSON.stringify(uni);

  const onclicker = async ()=>{
    console.log("clicked"+data);
    await addDoc(myDBCollectionRef, {name: data});

      // navigate("/uni", {state: {collegename: uni, collegelink: link, country: count}});
   }

  return (
    <div className='container datarec'>
        <UserCard
        float
        name={uni}
        header = {img}
        avatar="https://cdn3.vectorstock.com/i/1000x1000/53/22/college-symbol-icon-design-vector-31955322.jpg"
        onClick = {onclicker}
        />
    </div>
  )
}
