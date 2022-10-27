import { auth, db } from '../firbase-config';
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import {useEffect, useState} from "react";
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    const SignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            alert("Successfully signed out")
            routeChange()
          }).catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
          });
    }
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
                            <button variant="contained" onClick={SignOut}>Sign Out</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}