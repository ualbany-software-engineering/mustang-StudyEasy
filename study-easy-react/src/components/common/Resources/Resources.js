import React, {useState} from 'react';
import gre from './images/gre.jpg'
import ielts from './images/ielts.png'
import gmat from './images/gmat.jpg'
//import bitsat from './images/bitsat.jpg'
//import toefl from 'https://yt3.ggpht.com/ytc/AMLnZu_0BktBT4SkMmpZ4yITuCVMOu8Z8Gbpyl7W-xTgVg=s900-c-k-c0x00ffffff-no-rj';
import { Link } from "react-router-dom";
import "./Resources.css"
function Resources() {
    return (
        <>
 <div className='home'>
      <div className='main-container'>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={gre} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>GRE Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The Graduate Record Examination, or GRE, is an important step in the graduate school or business school application process. The GRE is a multiple-choice, computer-based, standardized exam that is often required for admission to graduate programs and graduate business programs (MBA) globally</p>
          <Link to="/gre">
            <button className='primary-btn'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={ielts} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>IELTS Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.</p>
          <Link to="/ielts">
            <button className='primary-btn'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src={gmat} className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>GMAT Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>The GMAT, which stands for the graduate management admission test, is a standardized test intended to measure a test taker's aptitude in mathematics, verbal skills, and analytical writing. The GMAT is most commonly used as the primary exam reviewed by business schools to gain entrance into an MBA program.</p>
          <Link to="/gmat">
            <button className='primary-btn'>Know more ...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_SAT_Logo_%28vector%29.svg/1200px-New_SAT_Logo_%28vector%29.svg.png" className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>SAT Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>SAT is a standardized test widely used for college admissions in the United States.
          The SAT is wholly owned, developed, and published by the College Board, a private, not-for-profit organization in the United States. It is administered on behalf of the College Board by the Educational Testing Service, which until recently developed the SAT as well.
          </p>
          <Link to="/sat">
            <button className='primary-btn'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu_0BktBT4SkMmpZ4yITuCVMOu8Z8Gbpyl7W-xTgVg=s900-c-k-c0x00ffffff-no-rj" className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>TOEFL Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>
          Test of English as a Foreign Language is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by more than 11,000 universities and other institutions in over 190 countries and territories. 
          </p>
          <Link to="/toefl">
            <button className='primary-btn'>Know more...</button>
          </Link>
        </div>
        <div className='gre-main-container'>
          <div className='gre-heading-container'>
            <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg" className="my-gre-image" alt="gre-img" />
            <h1 className='gre-main-heading'>BITSAT Preparation</h1>
          </div>
        
          <p className='gre-paragraph'>

          Birla Institute of Technology and Science Admission Test (BITSAT) is a computer-based online test for Admission to Integrated First Degree Programmes of BITS Pilani Campuses in Pilani, Goa, and Hyderabad. Exam Name. Birla Institute of Technology and Science Admission Test. Also Known As. BITSAT.
          </p>
          <Link to="/bitsat">
            <button className='primary-btn'>Know more...</button>
          </Link>
        </div>
        
      </div>
    </div>
</>
    );
}
export default Resources;