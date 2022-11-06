import React, { useState } from 'react'
import { Head } from './head'
import {Link} from "react-router-dom";
import "./head.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {

    const [click, setclick] = useState(false);

  return (
    <div>
        <Head/>
        <header>
            <nav className='flexSB'>
                <ul className = {click ? "mobile-nav" : "flexSB" } onClick = {()=> setclick(false)}>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/Search ">Search</Link></li>
                    <li><Link to = "/Trending">Trending</Link></li>
                    <li><Link to = "/Team">Team</Link></li>
                    <li><Link to = "/Comment">Reviews</Link></li>
                    <li><Link to = "/Resources">Resources</Link></li>
                    <li><Link to = "/Login">Login</Link></li>
                </ul>
                <div className='start'>
                    <div className='button'>
                        ABOUT US
                    </div>
                </div>
                <button className='toggle' onClick={() => setclick(!click)}>
                    {click ? <i className='bi bi-x'></i> : <i className='bi bi-list'></i>}
                </button>
            </nav>
        </header>
    </div>
  )
}

export default Header