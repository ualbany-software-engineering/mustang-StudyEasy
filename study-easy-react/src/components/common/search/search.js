import React, { useState } from 'react'
import { useNavigate} from 'react-router';

export const Search = () => {
  const [searchval, setsearchval] = useState();
  const navigate = useNavigate();

  const handleChange = (event) =>
  {
   setsearchval(event.target.value);
  }
 
  //reference let me google website
  function manageclick(){
    window.open("https://letmegooglethat.com/?q="+searchval, "_blank");
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
