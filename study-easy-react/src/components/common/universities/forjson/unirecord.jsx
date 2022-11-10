import React, { useEffect, useState } from 'react'
import { Unicard } from './unicard';
import { useLocation } from 'react-router';
import "./uni.css";

export const Unirecord = ({gcountry}) => {

     const location = useLocation(); 
    const [data,setData]=useState([]);
    var given = "";
    // let array_name = new Array(10000);
    // let array_link = new Array(10000);

    if(gcountry.toString().toLowerCase().includes("ivory coast"))
    {
     given = "côte d'ivoire";
    }
    else if(gcountry.toString().toLowerCase().includes("united republic of tanzania"))
    {
     given = "tanzania, united republic of";
    }
    else if(gcountry.toString().toLowerCase().includes("czechia"))
    {
     given = "czech republic";
    }
    else if(gcountry.toString().toLowerCase().includes("north korea"))
    {
     given = "korea, democratic people's republic of";
    }
    else if(gcountry.toString().toLowerCase().includes("south korea"))
    {
     given = "korea, republic of";
    }
    else if(gcountry.toString().toLowerCase().includes("vietnam"))
    {
     given = "viet nam";
    }
    else if(gcountry.toString().toLowerCase().includes("laos"))
    {
     given = "lao people's democratic republic";
    }
    else{
     given = gcountry.toString().toLowerCase();
    }
  
    const getData= async ()=>{
      fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
        .then(function(response){
        //   console.log(response)
          return response.json();
        })
        .then(function(myJson) {
        //   console.log(myJson);
        //due to json  issues had to manipulate data a bit
            setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
   // console.log(given);

  return (
    <div className='container datarec'>
        {data && data.length>0 && data.map((item)=> {
          console.log(given);
            var check = given.includes(item.country.toLowerCase()) || item.country.toLowerCase().includes(given);
            console.log(check);
            if(check)
            {
              var temp = item.name.toString();
              // console.log(temp);
              return <Unicard count = {given} uni={temp} link={item.web_pages[0]}/>
            }
        }
        )}
    </div>
  )
}
