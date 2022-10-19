// import { University } from "./University";
import React,{ useState } from 'react'
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography
  } from "react-simple-maps";
  import { Spring, config } from "react-spring";
  import chroma from "chroma-js";
// import { useState } from "react";


import Datacard from "../designpages/Datacard";
import '../styling/Country.css';
import { Button } from '@mui/material';
// import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

//chatbot imports
import MessageParser from "./Chatbot/bots/docsbot/MessageParser";
import ActionProvider from "./Chatbot/bots/docsbot/ActionProvider";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./Chatbot/images/bot.svg";


const geoPaths = ["/world.json", "/ch.json"];
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const colorScale = chroma.brewer.Oranges.slice(1);
const scl = chroma
  .scale(["#FFF", "#FF5419", "#000"])
  .mode("lch")
  .colors(8);

const colors = Array(180)
  .fill()
  .map(d => colorScale[getRandomInt(0, colorScale.length - 1)]);

export const Country = () => {  
    
    
    // var countryOptions = [
    //     {value: 'USA', label: "United States of America"},
    //     {value: 'IND', label: "India"},
    //     {value: 'CHI', label: "China"},
    //     {value :'None', label: 'None'}
    // ];
    // const [selectedCountry, userselectedCountry]= useState("");
    // // const update = (e) =>{updateData(e.value)}

    // const changer = () =>
    // {
    //     userselectedCountry();
    // }

    return (
        <>
        <div className="Country">
            {/* <Select options={countryOptions} value={selectedCountry} onChange={update} />  */}
            {/* {countryOptions.map((country) => (<option value = {country.value}>{country.label}</option>))} */}
            {/* </Select> */}
            <Datacard title="USA" logo="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/440px-Flag_of_the_United_States.svg.png" name = '/Univ/USA'/>
            <Datacard title="INDIA" logo="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1599px-Flag_of_India.svg.png?20111003033457" name = '/Univ/IND'/>
            <Datacard title="CHINA" logo="https://vignette.wikia.nocookie.net/cyberpunk/images/3/3e/255px-Flag_of_the_People%27s_Republic_of_China.svg.png/revision/latest?cb=20180830132455" name = '/Univ/CHI'/>
            <Datacard title="CANADA" logo="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" name = '/Univ/CAN'/>
            <Datacard title="UK" logo="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" name = '/Univ/UK'/>
             <Datacard title="Australia" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/250px-Flag_of_Australia_%28converted%29.svg.png" name = '/Univ/AUS'/>         
            {/* {<University country = {selectedCountry}/>} */}
      
        </div>
        <div>
        <br/><br/><br/>
      
       
      Hello Wordl!
     




             </div>
             </>
        );
};

// const Temp =()=>{
//     return(
//         <div>
//             <h4>
//                 temp in country</h4>
//         </div>)
// }

/*
 <option value ="USA">United States of America</option>
    <option value = "IND">India</option>
    <option value = "CHI">China</option>
    Hello 
*/