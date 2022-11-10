import React, { useState, useEffect, Suspense, lazy } from "react";
import { UserCard } from 'react-ui-cards';
import img from "../../../../images/unibg.jpg";
import { Button } from "@mui/material";
import { textAlign } from "@mui/system";
import Box from '@mui/material/Box';
import { db, auth } from "../../../../firbase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";



export const Unicard = ({uni, link}) => {

  return (
    <div>
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
    <Box textAlign='center'>
    <Button onClick={() => {
      const collectionRef = collection(db, "savedColleges");
      console.log("current user " + auth.currentUser.uid);
      console.log(uni);
      async function update() {
        await addDoc(collectionRef, {
          uid: auth.currentUser.uid,
          CollegeName: uni,
          url: link,
        });
      }
      update();
    }
    }>Save College</Button>
    </Box>
    </div>
  )
}
