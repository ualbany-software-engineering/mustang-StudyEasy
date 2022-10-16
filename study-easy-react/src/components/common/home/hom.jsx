import React from 'react'
import { Title } from '../title/title';
import "./home.css";
import { Path } from './path';
  
export const Hom = () => {
  return (
    <><>
      <section className='Hom'>
        <div className='container'>
          <div className='box'>
            <div className='row'>
              <Title subtitle="WELCOME TO" subtitle1="STUDY EASY" title="Because you are worth it :)" />
              <div className='button'>
                <button className='primary-btn'>
                  Get Started <i class="bi bi-arrow-right"></i>
                </button>
                <button>
                  View Course <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'>

      </div>
    </>
    <Path/>
   </>

  )
}
