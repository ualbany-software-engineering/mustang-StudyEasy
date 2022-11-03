import React from 'react'
import logo from "../../../images/logo.png";
import { SocialIcon } from 'react-social-icons';
import "./head.css";
export const Head = () => {
  return (
    <div>
        <section className='head'>
        <div className='container flexSB'>
            <div className='logo'>
                <img src={logo} alt="logo of the branding STUDY EASY"/>
            </div>
            <div className='socialmedia'>
              <ul>  <li className = "Social"><SocialIcon  url="" network='instagram'/></li>
                <li className = "Social"><SocialIcon  url="" network='facebook'/></li>
                <li className = "Social"><SocialIcon  url="" network='twitter'/></li>
                <i className = "Social"><SocialIcon  url="" network='email'/></i></ul>
            </div>
        </div>
        </section> 
    </div>
  )
}
