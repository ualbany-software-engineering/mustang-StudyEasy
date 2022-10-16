import React from 'react'
import { Head } from './head'
import {Link} from "react-router-dom";
import "./head.css";

export const Header = () => {
  return (
    <div>
        <Head/>
        <Header>
            <nav className='flexSB'>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/Search ">Search</Link></li>
                    <li><Link to = "/Trending">Trending</Link></li>
                    <li><Link to = "/Profile">Profile</Link></li>
                </ul>
                <div className='start'>
                    <div className='button'>
                        ABOUT US
                    </div>
                </div>
            </nav>
        </Header>
    </div>
  )
}
