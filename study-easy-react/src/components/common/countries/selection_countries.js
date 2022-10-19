import React, {useRef} from 'react'
import Map from './Map'
import "./selection_countries.css";

  
export const Selection_countries = () => {

  return (
    <div className='selection'>
        <div className='back'>
            <h2>
                Home / Selection
            </h2>
            <h1>Select your <br/> desired Country !</h1>
            <button type="button" class="primary-btn1">
              Scroll Down<i class = "bi bi-arrow-down-circle-fill"></i>
            </button>
            <div className='map'>
               <Map />
            </div> 
        </div>
         
    </div>
  )
}
