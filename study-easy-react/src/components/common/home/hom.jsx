import React from 'react'
import { Title } from '../title/title';
import "./home.css";
import { Path } from './path';
import { Link } from 'react-router-dom';

export const Hom = () => {
  return (
    <><>
      <section className='Hom'>
        <div className='container'>
          <div className='box'>
            <div className='row'>
              <Title subtitle="WELCOME TO" subtitle1="STUDY EASY" title="Your college search helper :)" />
              <div className='button'>
                <button className='primary-btn'>
                <Link to="/Countries" style={{color: "white"}}>
                  Get Started <i class="bi bi-arrow-right"></i>
                </Link>
                </button>
                <button className='primary-btn'>
                <Link to="/Steps" style={{color: "white"}}>
                  View Steps <i class="bi bi-arrow-right"></i>
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'>

      </div>
    </>
    <div>
    
    </div>
   
   </>

  )
}
