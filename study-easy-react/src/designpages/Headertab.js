import React from 'react';

import './Headertab.css';
import logo from '../images/logo.gif';

import HomeIcon from '@mui/icons-material/Home';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Person2Icon from '@mui/icons-material/Person2';
import PublicIcon from '@mui/icons-material/Public';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Headertab() {
  return (
    <div className = "headertab"> 
        <div className='header_icons'>
          
          <div className='header_icon header_icon--active'>
          <HomeIcon />
          <p>Home</p>
          </div>

          <div className='header_icon'>
          <PublicIcon />
          <p>List of Countries</p>
          </div>

          <div className='header_icon'>
          <LibraryBooksIcon />
          <p>List of Courses</p>
          </div>

          <div className='header_icon'>
          <DocumentScannerIcon />
          <p>Resources</p>
          </div>

          <div className='header_icon'>
          <Person2Icon />
          <p>Profile</p>
          </div>
         
          
         
        </div>
          <img src = {logo} alt = ""/>
           
    </div>
  )
}

export default Headertab 