import React, { useState } from 'react'
import "./login.css";
export const Login = () => {
    const [activeclass, setActiveclass] = useState(false);
  
  return (
    <div className='loginsection'>
    <div className='loginbody'>   
        <div className= {activeclass ? "login" : "login signup"} id= "login">
            <div className='formbody signupdata'>
                <form action='#'>
                    <h1>Dont Fall Behind !</h1>
                    <div className='othersignups'></div>
                    <span>or use an email to signup</span>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='E-mail'/>
                    <input type="password" placeholder='Password'/>
                    <button class = "primary-btn">
                        create Account
                    </button>
                </form>
            </div>

            <div className='formbody signindata'>
                <form action='#'>
                    <h1>Welcome back</h1>
                    <span>Signin</span>
                    <input type="email" placeholder='E-mail'/>
                    <input type="password" placeholder='Password'/>
                    <button class = "primary-btn">
                        SignIn 
                    </button>
                </form>
            </div>
            <div className='overlayer'>
                <div className = "overlay">
                    <div className='overdiv overlay-left'>
                        <h1>Home Coming</h1>
                        <p>
                            Are you returning student ?
                        </p>
                        <button className= "displayer" id = "signin" onClick={() => setActiveclass(true)}>Sign In</button>
                    </div>

                    <div className='overdiv overlay-right'>
                        <h1>Far from Home</h1>
                        <p>
                           Want to register with us?
                        </p>
                        <button className= "displayer" id = "signUp" onClick={() => setActiveclass(false)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
