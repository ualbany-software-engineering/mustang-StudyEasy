import React, { useEffect, useState } from 'react'
import { doc, query, where, getDocs, collection, orderBy, limit } from "firebase/firestore";
import {db} from "../../../firbase-config.js";
import { async } from '@firebase/util';

export const Trending = () => {

  const [data, setData] = useState([]);

  const dataretrival = async(e) => {
    const datared = collection(db, "visitedData");
    const q = query(datared, orderBy("count", "desc"), limit(11));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, "=>", doc.data());
    });
    // e.preventDefault();



    
  } 

  useEffect(()=>{
    dataretrival();
  }, [])

  return (
    <div className='container datarec'>
      {
        print.map((item) => {
          return <UserCard
          float
          name={item}
          header = {img}
          avatar="https://cdn3.vectorstock.com/i/1000x1000/53/22/college-symbol-icon-design-vector-31955322.jpg"
          // onClick = {onclicker}
          />
          
        })
      }
    </div>
  )
}
