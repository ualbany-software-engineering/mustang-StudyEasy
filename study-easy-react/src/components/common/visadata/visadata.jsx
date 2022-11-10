// fetch("https://raw.githubusercontent.com/DheerajKumarT/visadata/main/Visa.json")
import React, { useEffect, useState } from 'react'
import { Visacard } from './visacard';
import { useLocation } from 'react-router';

export const Visadata = ({gcountry}) => {

     const location = useLocation(); 
    const [data,setData]=useState([]);
    const [state, setState] = useState([]);

    const getData=()=>{
      fetch("https://raw.githubusercontent.com/DheerajKumarT/visadata/main/Visa.json")
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
            //console.log(check);
            if(check)
            {
              var temp = item.country.toString();
              var data=item.data.toString();
              var necessary=item.necessary.toString();
               console.log(data);
              return <Visacard uni={temp} data={data} necessary={necessary}/>
            }
        }
        )}
    </div>
  )
}
   