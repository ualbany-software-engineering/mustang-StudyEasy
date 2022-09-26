import React from 'react';

import '../styling/Headertab.css';
import logo from '../images/logo/lastcopy.png';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PageviewIcon from '@mui/icons-material/Pageview';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function Headertab() {
  return (
    <div className = "headertab"> 
        <div className='header_icons'>
          
          <div className='header_icon header_icon--active'>
          <HomeIcon />
          <p>Home</p>
          </div>

          <div className='header_icon'>
          <PageviewIcon />
          <p>Search</p>
          </div>

          <div className='header_icon'>
          <FlashOnIcon/>
          <p>Trending</p>
          </div>

          <Link to='/Home1' style={{textDecoration: 'none' , color: 'white'}}>
            <div className='header_icon'>
              <AutoStoriesIcon/>
            <p>Resources</p>
          </div>
          </Link>
          
          <div className='header_icon'>
          <AccountBoxIcon/>
          <p>Profile</p>
          </div>
        </div>

        
        <img src = {logo} alt = ""/>
          
           
    </div>
  )
}

export default Headertab 