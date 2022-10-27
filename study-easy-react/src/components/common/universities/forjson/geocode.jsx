import React, { useState } from 'react'
import Geocode from "react-geocode";
import { Unicard } from './unicard';

export const Geocoder = (uniname, gstate) => {

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
  
    const [data, setData] = useState([]);

    Geocode.fromAddress(uniname).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          // console.log(lat, lng);
          Geocode.fromLatLng(lat, lng).then(
            (response)=>{
              setTimeout(async()=> { 
                const address = response.results[0].formatted_address;
                let state;
                for (let i = 0; i < response.results[0].address_components.length; i++) {
                  for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                    switch (response.results[0].address_components[i].types[j]) {
                      case "administrative_area_level_1":
                        state = response.results[0].address_components[i].long_name;  
                        if(state.toLowerCase().includes(gstate))
                        {
                           await sleep(10000);
                           setData(uniname);
                           console.log(uniname+" "+state);
                        } 
                        break;
                    }
                  }
                }   
              },5000);
            },
            (error)=>{
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      )
  return (
    <div>
        {
            data && data.length>0 && data.map((item)=>
            {
                return <Unicard uni={item}/>
            })
        }
    </div>
  )
}
