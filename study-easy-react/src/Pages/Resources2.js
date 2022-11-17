import React from 'react'
import {db} from '../firbase-config';
import '../styling/Resources2.css';
import {useLocation} from 'react-router-dom';
import {useState,useEffect} from "react";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore';
function Resources2(){
    const location = useLocation();
    const [users,setUsers]= useState([]);
    const userCollectionRef=collection(db,"Eresources");
    useEffect(()=>{
        const getUsers = async()=>{
          const data=await getDocs(userCollectionRef);
          setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getUsers();
      },[]); 
    return(
        <>
        {users.map((user)=>{
            if(user.id===location.state.name){
                return(
                    <div className="menu">
                        <h1 className="menuTitle">{user.heading}</h1>
                        <div className="menuList">
                            <div className="menuItem">
                                <div style={{backgroundImage:`url(${user.img1})`}}> </div>
                                <h1>{user.text1}</h1>
                                <p>{<button className="primary-btn"><a class="a1" href={user.link1} target="blank">Click Here</a></button>}</p>
                            </div>
                            <div className="menuItem">
                                <div style={{backgroundImage:`url(${user.img2})`}}> </div>
                                <h1>{user.text2}</h1>
                                <p>{<button className="primary-btn"><a class="a1" href={user.link2} target="blank">Click Here</a></button>}</p>
                            </div>
                            <div className="menuItem">
                                <div style={{backgroundImage:`url(${user.img3})`}}> </div>
                                <h1>{user.text3}</h1>
                                <p>{<button className="primary-btn"><a class="a1" href={user.link3} target="blank">Click Here</a></button>}</p>
                            </div>
                        </div>
                        <div className="container">
                            <h1 className="menuTitle">Downlodable Materials</h1>
                            <ul className="list-container">
                                <li><a href={user.material1} download>Material 1</a></li>
                                <li><a href={user.material2} download>Material 2</a></li>
                                <li><a href={user.material3} download>Material 3</a></li>
                            </ul>
                        </div>
                    </div>
                );
            }
        })}
         
        </>
    );
}
export default Resources2;