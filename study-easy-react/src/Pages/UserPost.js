import React from 'react'
import '../styling/UserPost.css';
import {auth, db} from '../firbase-config';

import {useState,useEffect} from "react";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
function UserPost({isAuth}) {
    const [posts,setPosts]= useState([]);
    const userCollectionRef=collection(db,"Nposts");
    useEffect(()=>{
        const getPosts = async()=>{
          const data=await getDocs(userCollectionRef);
          setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getPosts();
      },[]);
      const deletePost = async (id) => {
        const postDoc = doc(db, "Nposts", id);
        await deleteDoc(postDoc);
      };
  return (
    <div className='homePage'>
        <div className='theading'>
            <span>Reviews</span>
            <h1>User Posts</h1>
        </div>
        {
            posts.map((post)=>{
                return(
                    
                    <div className='post'>
                        <div className='postHeader'>
                            <div className='title'>
                                <h1>{post.title}</h1>
                            </div>
                            
                        </div>
                        
                        
                        <div className='postTextContainer'>
                            
                            {post.postText}
                        </div>
                        
                        
                        
                        <h3>@{post.author.name}</h3>
                        <div className='deletePost'>
                               { post.author.id===auth.currentUser.uid && (<button onClick={() => {
                      deletePost(post.id);
                    }}>&#128465;</button>)} 
                        </div>
                    </div>
                )
            })
        }
    </div>
    
    
  );
}

export default UserPost;
