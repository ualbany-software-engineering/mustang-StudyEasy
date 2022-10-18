import "../styling/Login.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app, auth} from '../firbase-config'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully created an account")
                routeChange()
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
                routeChange()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                //const errorMessage = error.message;
                alert(errorCode)
            });
    }

    return (
        <div className="loginCreateAccount">
            <div classsName='login'>
                <input type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)} />
                <input type={"password"} placeholder="please enter your password" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={signUp}>Create Account</button>
                <button onClick={signIn}>Sign in</button>
            </div>
        </div>
    );
}

export default Login;