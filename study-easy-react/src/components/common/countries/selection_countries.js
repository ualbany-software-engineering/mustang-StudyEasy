import React, {useRef} from 'react'
import Map from './Map'
import "./selection_countries.css";

  
export const Selection_countries = () => {
  window.scrollTo(0,0);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
  }
  return (
    <div className='selection'>
        <div className='back'>
            <h2>
                Home / Selection
            </h2>
            <h1>Select your <br/> desired Country !</h1>
            <button type="button" class="primary-btn1" onClick={handleClick}>
              Scroll Down<i class = "bi bi-arrow-down-circle-fill"></i>
            </button>
            <div ref = {ref} className='map'>
               <Map />
            </div> 
        </div>
         
    </div>
  )
}
