import React, { useState } from 'react'
import { useNavigate} from 'react-router';
import * as JsSearch from "js-search";
import { Unicard } from '../universities/forjson/unicard';

export const Search = () => {
  const [searchval, setsearchval] = useState();
  const [searchdata, setSearchData] = useState([]);
  const [linker, setLink] = useState([]);

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

  var given = " ";
  const handleChange = (event) =>
  {
   setsearchval(event.target.value);
  }
 
  //reference let me google website
  function manageclick()
  {
    // window.open("https://letmegooglethat.com/?q="+searchval, "_blank");
    // getData();
    data && data.length>0 && data.map((item) => {
      given = item.name.toLowerCase();
      if(given.includes(searchval.toLowerCase()))
      {
        console.log(item.name);
        setSearchData(arr => [...arr, item]);
        // setLink(arr => [...arr, item.web_pages[0]]);
      }
    })
  }
  
  return (
   <><div className='searcher'>
      <div className='searchbg'>
        <h2>Home/Search</h2>
        <h1>Scan is what we do</h1>
      </div>
      <div className='container box_edit'>
      <input value = {searchval} onChange={handleChange}  className="searchbox" type="text" placeholder='search' />
      </div>
    </div>
    <div className='btn'><button className='primary-btn' onClick={manageclick}>search</button></div>
    <div className='container datarec editor'>
      {
        searchdata.map((item) => {
          return <Unicard count={item.country} uni = {item.name} link= {item.web_pages[0]}/>
        })
      }
    </div>
    </>
  )
}
