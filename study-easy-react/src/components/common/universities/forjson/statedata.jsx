import React, { useEffect, useState } from 'react'
import { Statecard } from './statecard';

export const Statedata = ({gcountry}) => {
    const [data, setData] = useState([])
    const given = gcountry.toString().toLowerCase();
    var i;
    const getData=()=>{
        fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json")
          .then(function(response){
          //   console.log(response)
            return response.json();
          })
          .then(function(myJson) {
          //   console.log(myJson);
              setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])

  return (
    <div>
        {
            data && data.length>0 && data.map((item) => {
                if(given.includes(item.name.toLowerCase()))
                {
                    // console.log(item.states);
                   return <Statecard gicountry = {gcountry} states={item.states}/>
                }
            } )
        }
    </div>
  )
}
