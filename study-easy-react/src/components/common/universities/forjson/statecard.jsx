import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Statecard = ({states, gicountry}) => {

  console.log(states.name);
  const navigate = useNavigate();
  const handler = (a) =>{
    navigate("/statewiseuni",  {state : {currentstate: a, country: gicountry}})
  } 
  return (
    <div>
        {
          states.map(function(item){
            // console.log(item.name);
            return <p onClick={()=>{handler(item.name)}}>{item.name}</p>
          })
        }
    </div>
  )
}


