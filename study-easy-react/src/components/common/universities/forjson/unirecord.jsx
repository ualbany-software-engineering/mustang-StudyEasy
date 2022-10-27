import React, { useEffect, useState } from 'react'
import { Unicard } from './unicard';
import { useLocation } from 'react-router';
import "./uni.css";

export const Unirecord = ({gcountry}) => {

     const location = useLocation(); 
    const [data,setData]=useState([]);
    const [state, setState] = useState([]);

    const getData=()=>{
      fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
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


    const given = gcountry.toString().toLowerCase();
    console.log(given);

  return (
    <div className='container datarec'>
        {data && data.length>0 && data.map((item)=> {
            var check = given.includes(item.country.toLowerCase());
            console.log(check);
            if(check)
            {
              var temp = item.name.toString();
              // console.log(temp);
              return <Unicard uni={temp} link={item.web_pages[0]}/>
            }
        }
        )}
    </div>
  )
}
