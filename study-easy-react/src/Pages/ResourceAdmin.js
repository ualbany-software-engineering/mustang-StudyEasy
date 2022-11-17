import React from 'react';
import '../styling/ResourceAdmin.css';
import {db} from '../firbase-config';
import { async } from "@firebase/util";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import {Link, useNavigate} from 'react-router-dom';
import {useState,useEffect} from "react";

function ResourceAdmin() {
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
      const deleteUser = async(id)=>{
        const userDoc=doc(db,"Resources",id);
        await deleteDoc(userDoc);
        alert(`Selected Resource is Deleted`)
        await delay(2000);
        //navigate('/');
      };
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  return (
   <>
   <div className='Head'><h1>Update Resources</h1></div>
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
                            <button className='primary-btn' onClick={()=>{deleteUser(user.id)}}>Delete Resource</button>
                            
                        </div>
                         
                      
                    );
                }
                
            })}
        </div>
        <div className='linka'><h2><Link to="/AddResource">Add Resource</Link></h2></div>
    </div>
   </>
  )
}

export default ResourceAdmin