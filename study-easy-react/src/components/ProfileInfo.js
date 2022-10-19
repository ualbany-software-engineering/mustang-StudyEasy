import { auth, db } from '../firbase-config';
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import {useEffect, useState} from "react";


export default function UserProfile(){
    const[getUser,setGetUser] = useState([])
    const usersPersonalDataCollectionRef = collection(db, "usersPersonalData")
    useEffect(()=> {
        const getUserInfo = async()=> {
            const data = await getDocs(usersPersonalDataCollectionRef)
            console.log(data)
            setGetUser(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
            
        }
        getUserInfo();
    },[])
    return (
        <div>
            <h1>userid={auth.currentUser?.uid}</h1>
            {getUser.map((e)=> {
                if (e.userID===auth.currentUser?.uid) {
                    return (
                        <div>
                            <h2>firstname = {e.Fname}</h2>
                            <h2>lastname = {e.Lname}</h2>
                            <h2>phonenumber = {e.PhoneNumber}</h2>
                        </div>
                    )
                    
                }
            })}
        </div>
    )
}