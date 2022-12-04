import React from 'react';
import {useState,useEffect} from "react";
import {db} from '../firbase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { async } from "@firebase/util";

import {Link, useNavigate} from 'react-router-dom';
import '../styling/Resources.css';

function Resources() {
    const p="GREf";
    const navigate = useNavigate();
    const [users,setUsers]= useState([]);
    const userCollectionRef=collection(db,"ExamResources");  
    useEffect(()=>{
        const getUsers = async()=>{
          const data=await getDocs(userCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getUsers();
      },[]);
      const toComponentB=(sam)=>{
        navigate('/Resources2',{state:{id:1,name:sam}});
          }
  return (
    <>
    <div className='home'>
        <div className='main-container'>
            {users.map((user)=>{
                if(user.heading!==p){
                    return(
                        <div className='gre-main-container'>
                            <div className='gre-heading-container'>
                                <img src={user.img} className="my-gre-image" alt="gre-img"/>
                                <h1 className='gre-main-heading'>{user.heading}</h1>
                            </div>
                            <p className='gre-paragraph'>{user.description}</p>
                            <button className='primary-btn' onClick={()=>{toComponentB(user.next)}}>Know More</button>
                            
                        </div>
                    );
                }
                
            })}
        </div>
    </div>
    </>
  );
}

export default Resources;