import "../styling/Login.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase-config.js';
import { useState } from "react";

function Login() {

    const auth = getAuth(app);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully created an account")
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