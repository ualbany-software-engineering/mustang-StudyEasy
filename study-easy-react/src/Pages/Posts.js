import React from 'react'
import {useState,useEffect} from "react";
import {db} from '../firbase-config';
// import pic from '../assets/userIcon.png';
import '../styling/Resources.css';
import {collection,getDocs} from 'firebase/firestore';
export default function Posts() {

    const [posts,setPosts]= useState([]);
    const userCollectionRef=collection(db,"Posts");
    
      useEffect(()=>{
        const getPosts = async()=>{
          const data=await getDocs(userCollectionRef);
          setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getPosts();
      },[]);


    // const handleDelete = (id) => {
    //     deleteDoc(doc(db,"Posts", id))
    //     document.getElementById(id).style.display = "none"
    //     alert("Deleted Successfully!")
    // }

    // const handleUpdate = (id) => {
    //     navigate("/AddPosts?id="+id);
    // }

  return (
    <>
        <div className='zazu'>
        <div>
            <h1>Study Easy</h1>
        </div>
        <div className='tboxC d-flex'>
        {posts.map((item)=>{
            return(
              <div className="card col-md-3 col-sm-6 col-xs-12 m-1">
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description}</p>
              </div>
              <img className="card-img-top" src={item.image} alt="Card image cap" />
            </div>
                
            );
        })}

        </div>
    </div>
    
    </>

    
  );
}