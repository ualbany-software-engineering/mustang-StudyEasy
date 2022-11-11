
import React, {useRef, useState, useEffect, Suspense, lazy } from "react";
import Spinner from "./img.js";
import "./university.css";
import { useLocation, useNavigate } from "react-router";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Slider } from "./slider.js";
import { Scraper } from "./forscraping/wikiscraper.jsx";
import { Unirecord } from "./forjson/unirecord.jsx";
import { Statedata } from "./forjson/statedata.jsx";
import {Visadata} from "../visadata/visadata.jsx";
import { Navbar } from "./navbar.jsx";
import Sidenav from "../SideNav/SideNav.js";

export const University = () => {
  
  window.scrollTo(0,0);

  const location = useLocation();
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behaviour: 'smooth'});
  }

  return (
    <div>
      <div className="university">
        <h2>Country/University</h2>
        <h1>{location.state.country}</h1>
        <h1 className="scroll"></h1>
      </div>
      <div className="breaker">
      <br/>
      </div>
      <Suspense className= "slider" fallback={<Spinner />}>
              <div  className="slide">
                <Slider country = {location.state.country}/>
              </div>
      </Suspense>
      <br/>
      <br/>
    
      {/* <ol class="navol">
  <li ><a class="active navli" href="#overview">Overview</a></li>
  <li><a class="navli">Colleges</a></li>
  <li><a class="navli" >Requirements</a></li>
  <li><a class="navli" >Estimated Cost</a></li>
  <li><a class="navli">Visa</a></li>
</ol> */}


<div>
<Sidenav />

<div className="" id="overview">


        <h1>Overview</h1>
        <Scraper wikiData={location.state.country}/>
      </div>
      
      <div id="colleges">
      <h1>Colleges</h1>
        <Unirecord gcountry= {location.state.country}/> 
        {/* <Statedata gcountry={location.state.country}/> */}
        {/* <Visaglobe/> */}
        {/* <Navbar/> */}
         {/* <Visadata/> */}
        </div>     
{/* <div id="requirements">requirements hi irovnoineoifneoi fejsniofesnfoiesnf eo;ifneis</div>
<div id="estimatedcost"> cost ksgihenoiesgpsjegohi irovnoineoifneoi fejsniofesnfoiesnf eo;ifneis</div> */}

<div id="visa" className="visaclass"> 
<h1>Visa Information</h1>
<Visadata gcountry= {location.state.country}/> 
</div>
    </div>
    </div>
    
  )
}
