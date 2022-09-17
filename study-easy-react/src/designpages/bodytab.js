import React from 'react'
// import Datacard from './Datacard';
import './bodytab.css';
import videobg from '../images/background/glov.mp4';

function bodytab() {
  return (
    <div className='bodystyle'>
        <video autoPlay loop muted id = "videobg">
            <source src= {videobg} type='video/mp4'/>
        </video>
    </div>
  )
}

export default bodytab;