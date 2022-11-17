import React from 'react'
import logo from "../../../images/logo.png";
import { SocialIcon } from 'react-social-icons';
import "./head.css";
import Toggle from 'react-toggle';

export const Head = () => {
  const monochrome = false

  const handleChange =() =>{
    var ele = document.body;
    ele.classList.toggle("mono");
  }

  return (
    <div>
        <section className='head'>
        <div className='container flexSB'>
            <div className='logo'>
                <img src={logo} alt="logo of the branding STUDY EASY"/>
            </div>
            <div className='socialmedia'>
              <ul>
                <li className='toggler'> 
                Monochrome
                &nbsp;&nbsp;
                <Toggle
                id = "monochrome"
                icons={false}
                defaultChecked= {monochrome}
                onChange = {handleChange}
                />
                </li>
                <li className = "Social"><SocialIcon  url="" network='instagram'/></li>
                <li className = "Social"><SocialIcon  url="" network='facebook'/></li>
                <li className = "Social"><SocialIcon  url="" network='twitter'/></li>
                <li className = "Social"><SocialIcon  url="" network='email'/></li>
                </ul>
            </div>
        </div>
        </section>
    </div>
  )
}
