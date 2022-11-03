import React, {useRef} from 'react'
import { Teamcard } from './teamcard'
import "./team.css";

export const Team = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <div>
        <div className='back1'>
        <h2>Home/Team</h2>
        <h1>Campus<br/>Ambassadors</h1>
        <button type="button" class="primary-btn1" onClick={handleClick}>
              Scroll Down<i class = "bi bi-arrow-down-circle-fill"></i>
        </button>
        <div className='team'>
        <section className='team padding'>
        <div ref = {ref} className='container grid'>
          <Teamcard />
        </div>
        </section>
        </div>
      </div>
    </div>
  )
}
