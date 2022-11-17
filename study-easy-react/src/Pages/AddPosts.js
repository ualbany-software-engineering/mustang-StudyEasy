import React from 'react'
import {useState,useEffect} from "react";
import {auth, db} from '../firbase-config';

import '../styling/Comment.css';
import { useNavigate } from "react-router-dom";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { useLocation } from "react-router-dom";

export default function AddPosts() {
    const [newTitle,setNewTitle]=useState("");
    const [newUrl,setNewUrl]=useState("");
    const [newDescription, setNewDescription]=useState("");
    const [newImage,setNewImage]=useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageData, setSelectedImageData] = useState(null);
    const [postId, setPostId] = useState(null);
    const currentUser = auth.currentUser
    let navigate = useNavigate();
    const userCollectionRef=collection(db,"Posts");

    const createPost=async()=>{
        if (selectedImage !== null) {
          var reader = new FileReader();
          var url = reader.readAsDataURL(selectedImage);
          reader.onloadend = await function (e) {
            console.log(reader.result)
            if (postId === null) addDoc(userCollectionRef,{uid: currentUser.uid, title:newTitle,description:newDescription,image:reader.result});
            else updateDoc(doc(db, 'Posts', postId),{uid: currentUser.uid, title:newTitle,description:newDescription,image:reader.result});
            if (postId === null) alert("New Post Added Successfully!")
            else alert("Post Updated Successfully!")
            navigate("/Posts");
  
          }.bind(this);
        }
        else {
          if (postId === null) await addDoc(userCollectionRef,{uid: currentUser.uid, title:newTitle,description:newDescription,image:selectedImageData});
          else await updateDoc(doc(db, 'Posts', postId),{uid: currentUser.uid, title:newTitle,description:newDescription,image:selectedImageData});
          if (postId === null) alert("New Post Added Successfully!")
          else alert("Post Updated Successfully!")
          navigate("/Posts");
        }
    };

    const location = useLocation()
    useEffect(()=>{
        const params = new URLSearchParams(location.search)
        const id = params.get('id')
        const getPost = async()=>{
          const data=await getDocs(userCollectionRef);
          data.docs.map((doc)=>{
            if (doc.id === id) {
              setNewTitle(doc.data().title)
              setNewDescription(doc.data().description)
              setNewUrl(doc.data().url)
              setPostId(doc.id)
            }
          });
        };
        getPost();


      },[]);



  return (
   <div className="createPostPage">
      <div className="cpContainer-resource">
        <h1>{postId === null ?'Add Post':'Edit Post'}</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            value={newTitle}
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Description:</label>
          <textarea
            className="description"
            placeholder="Description..."
            value={newDescription}
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
        <div>
          {selectedImage && (
            <div>
            <img alt="not fount" width={"450px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <br />
        
          <br /> 
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
      </div>

        <button className= "primary-btn" onClick={createPost}> {postId === null ? 'Add Post':'Update Post'}</button>
      </div>
    </div>
  )
}
