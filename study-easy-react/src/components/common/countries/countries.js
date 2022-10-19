import React from 'react'
import db from '../../../firebase/firebaseconfig.js';
import { useState, useEffect} from 'react';
import { async } from '@firebase/util';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import  Map  from './Map.js';

export const Country = () => {

    // const getmap = () => {
    //     const getFromFirebase = FireBase.firestore().collection("countryflag");
    //     getFromFirebase.onSnapshot((querySnapShot) => {
    //       const saveFirebaseTodos = [];
    //       querySnapShot.forEach((doc) => {
    //         saveFirebaseTodos.push(doc.data());
    //       });
    //       setTodos(saveFirebaseTodos);
    //     });
    //   };

      const[flag, setflag] = useState([]);
      const reference = collection(db, "countryflags");
      useEffect(() => {
        const getflags = async()=>{
            const data = await getDocs(reference);
            console.log(data + "printing the data");
            setflag(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
            console.log(flag);
        } 
        getflags()
      },[]
      );

      return (
        <>
        <div>
            {
                flag.map((flagdata,index) => {
                    return(

                        <>
                        {/* <div key={index}>
                            <img src={flagdata.canada} />
                        </div> */}

                        <div className='back'>
                        {/* <Routerdisplay title="Selection"/> */}
                        </div>
                        
                        <div className='map'>
                            <Map />
                        </div>
                      
                        </>

                    )
                })
            }
        </div>
        </>
       );

}

