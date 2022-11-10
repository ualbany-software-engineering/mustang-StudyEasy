import React from 'react'
import {useState,useEffect} from "react";
import {db} from '../firbase-config';
// import pic from '../assets/ets.png';
import '../styling/Comment.css';
import { useNavigate } from "react-router-dom";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';

function CreateComment() {
    const [newName,setNewName]=useState("");
    const [newAge, setNewAge]=useState("");
    let navigate = useNavigate();
    const userCollectionRef=collection(db,"Comments");
    const createUser=async()=>{
        await addDoc(userCollectionRef,{name:newName,age:(newAge)});
        navigate("/Comment");
      };
  return (
   <div className="createPostPage">
      <div className="cpContainer">
        <h1>Write a Review</h1>
        <div className="inputGp">
          <label> Name:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Review:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setNewAge(event.target.value);
            }}
          />
        </div>
        <button className= "primary-btn"onClick={createUser}> Submit Review</button>
      </div>
    </div>
  )
}

export default CreateComment
