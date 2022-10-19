import React, { useState } from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app, auth, signInWithGoogle} from "../../../firebase/firebaseconfig"


export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully created an account")
                navigate("/Countries");
                // routeChange()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
                alert(errorCode)
                // ..
            });
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("Successfully signed in")
                navigate("/Countries");
                // routeChange()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
                alert(errorCode)
            });
    }

    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            navigate("/Countries")  
         }).catch((error) => {console.log(error);});
    }

    const [activeclass, setActiveclass] = useState(false);
  
  return (
    <div className='loginsection'>
    <div className='loginbody'>   
        <div className= {activeclass ? "login" : "login signup"} id= "login">
            <div className='formbody signupdata'>
                <form action='#'>
                    <h1>Dont Fall Behind !</h1>
                    <br/>
                    <div>
                     <img onClick = {signInWithGoogle} className="google" width="15px" alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <br/>
                    <span>or use an email to sign up</span>
                    
                    <input type="text" placeholder='Name' />
                    <input type={"email"} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                    <input type={"password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button class = "primary-btn" onClick={signUp}>
                        Create Account
                    </button>
                </form>
            </div>

            <div className='formbody signindata'>
                <form action='#'>
                    <h1>Welcome back</h1>
                    <span>Sign In</span>
                    <br/>
                    <div>
                     <img onClick = {signInWithGoogle} className="google" width="15px" alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    </div>
                    <br/>
                   <span className='or'>
                   <hr className='border'/>
                   &nbsp; or &nbsp;
                    <hr className='border' />
                    </span>
                    <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button class = "primary-btn" onClick={signIn}>
                        Sign In 
                    </button>
                </form>
            </div>
            <div className='overlayer'>
                <div className = "overlay">
                    <div className='overdiv overlay-left'>
                        <h1>Home Coming ? 🎉</h1>
                        <p>
                        Are you returning student ?
                        </p>
                        <button className= "displayer" id = "signin" onClick={() => setActiveclass(true)}>LOGIN</button>
                    </div>

                    <div className='overdiv overlay-right'>
                        <h1>Far from Home...✌</h1>
                        <p>
                           Want to register with us?
                        </p>
                        <button className= "displayer" id = "signUp" onClick={() => setActiveclass(false)}>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
