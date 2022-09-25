import React from 'react'
import gre from '../assets/gre.jpg';
import ielts from '../assets/ielts.png';
import gmat from '../assets/gmat.jpg';
import "../styling/Home1.css"
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className='home'>
      <div className='main-container'>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={gre} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>GRE Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The Graduate Record Examination, or GRE, is an important step in the graduate school or business school application process. The GRE is a multiple-choice, computer-based, standardized exam that is often required for admission to graduate programs and graduate business programs (MBA) globally</p>
          <Link to="/Gre">
            <button className='knowMore-button'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={ielts} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>IELTS Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.</p>
          <Link to="/menu">
            <button className='knowMore-button'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={gmat} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>GMAT Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The GMAT, which stands for the graduate management admission test, is a standardized test intended to measure a test taker's aptitude in mathematics, verbal skills, and analytical writing. The GMAT is most commonly used as the primary exam reviewed by business schools to gain entrance into an MBA program.</p>
          <Link to="/menu">
            <button className='knowMore-button'>Know more ...</button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home