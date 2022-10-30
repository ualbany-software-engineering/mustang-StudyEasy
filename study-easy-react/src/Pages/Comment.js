import React from 'react'
import {useState,useEffect} from "react";
import {db} from '../firbase-config';
// import pic from '../assets/userIcon.png';
import '../styling/Comment.css';
import { useNavigate } from "react-router-dom";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
function Comment() {
    
    const [users,setUsers]= useState([]);
    const userCollectionRef=collection(db,"Comments");
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        
        navigate("/CreateComment");
      };
    
      useEffect(()=>{
        const getUsers = async()=>{
          const data=await getDocs(userCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getUsers();
      },[]);
  return (
    <>
        <div className='zazu'>
        <div className='theading'>
            <span>Reviews</span>
            <h1>Student's Saying</h1>
        </div>
        <div className='tboxC'>
        {users.map((user)=>{
            return(
                
                    <div className='tbox'>
                        <div className='box-top'>
                            <div className='profile'>
                                <div className='profile-img'>
                                    {/* <img src={pic} alt="fafs"/> */}
                                </div>
                                <div className='name-user'>
                                    <strong>{user.name}</strong>
                                    <span> @{user.name} </span>
                                </div>
                            </div>
                            <div className='reviews'></div>
                        </div>
                        <div className='client-comment'>
                            <p>{user.age}</p>
                        </div>
                        
                    </div>
            
                
            );
        })}

        </div>
        <button className='primary-btn' onClick={routeChange}>Write Review</button>;
    </div>
    
    </>

    
  );
}

export default Comment