import React from 'react'
import "./App.css"
export const Mono = () => {
      
function monochrome(){
    var ele=document.body;
    ele.classList.toggle("blind");
  }
  return (

    <div>
        <button onClick={monochrome}>Blind</button>
         
    </div>

  )
}
