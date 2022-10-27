
import React, {useRef, useState, useEffect, Suspense, lazy } from "react";
import Spinner from "./img.js";
import "./university.css";
import { useLocation, useNavigate } from "react-router";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Slider } from "./slider.js";
import { Scraper } from "./forscraping/wikiscraper.jsx";
import { Unirecord } from "./forjson/unirecord.jsx";
import { Statedata } from "./forjson/statedata.jsx";
import Visaglobe, { Visadata } from "../visadata/visadata.jsx";
import { Navbar } from "./navbar.jsx";

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
      <div className="container">
        <h1>Overview</h1>
        <Scraper wikiData={location.state.country}/>
      </div>

      <div>
        <Unirecord gcountry= {location.state.country}/>
        {/* <Statedata gcountry={location.state.country}/> */}
        {/* <Visaglobe/> */}
        {/* <Navbar/> */}
        {/* <Visadata/> */}
      </div>


    </div>
  )
}
