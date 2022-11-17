import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router';
import * as JsSearch from "js-search";

export const Search = () => {
  const [searchval, setsearchval] = useState();

 const [data,setData]=useState([]);
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



  const navigate = useNavigate();
  
  // const queryJson = require("query-json");
  // const regrex = new RegExp("Marywood University");
  // const result = queryJson.search(data, regrex);
  // console.log(result)


  const handleChange = (event) =>
  {
   setsearchval(event.target.value);
  }
 
  //reference let me google website
  function manageclick()
  {
    // window.open("https://letmegooglethat.com/?q="+searchval, "_blank");
    getData();
    data && data.length>0 && data.map((item) => {
      if(item.name.toLowerCase().includes(searchval.toLowerCase()))
      {
        console.log(item.name);
      }
    })
  }
  
  return (
   <><div className='searcher'>
      <div className='searchbg'>
        <h2>Home/Search</h2>
        <h1>Scan is what we do</h1>
      </div>
      <input value = {searchval} onChange={handleChange}  className=" container searchbox" type="text" placeholder='search' />
    </div>
    <div className='btn'><button className='primary-btn' onClick={manageclick}>search</button></div>
   
    </>
  )
}
