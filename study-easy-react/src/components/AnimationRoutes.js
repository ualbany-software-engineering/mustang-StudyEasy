import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";
import {Country} from "../Pages/Country";
import Home from '../Pages/Home';
import About from "../Pages/AboutLowercase";
import Extra from '../Pages/Extra';
// import {University} from '../pages/University';
import {Majors}from '../components/Majors';
import {Courses}from '../components/Courses';
import {AnimatePresence} from 'framer-motion';
// import { CollegeDisplay } from '../pages/CollegeDisplay';
import  {USA}  from '../countrypages/USA';
import { INDIA } from '../countrypages/INDIA';
import { CHINA } from '../countrypages/CHINA';
import { CANADA } from '../countrypages/CANADA';
import { UK } from '../countrypages/UK';
import { AUS } from '../countrypages/AUS';
import { USAVISA } from '../visapages/usavisa';
import { INDIAVISA } from '../visapages/indiavisa';
// import { INDIA } from '../countrypages/INDIA';
import { CANADAVISA } from '../visapages/canadavisa';
import { CHINAVISA } from '../visapages/chinavisa';
import { UKVISA } from '../visapages/ukvisa';
import Error from "./Error"
import Home1 from '../Pages/Home1';
import Gmat from '../Pages/Gmat';
import Gre from '../Pages/Gre';
import Ielts from '../Pages/Ielts';

import Ualbany from '../adminreq/US/UAB'
import SBU from '../adminreq/US/SBU'

import UM from '../adminreq/AUS/UM'
import USyd from '../adminreq/AUS/USyd'


import IIT from "../adminreq/INDIA/IIT"
import NIT from "../adminreq/INDIA/NIT"
import McG from '../adminreq/CAN/McG';
import UT from '../adminreq/CAN/UT';
import UC from '../adminreq/UK/UC';
import UO from '../adminreq/UK/UO';
import Peking from '../adminreq/CHINA/Peking';
import Shanghai from '../adminreq/CHINA/Shanghai';

function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname} basename = {process.env.PUBLIC_URL}>
               <Route path="/" exact element={<Home/>} />
               <Route path = "/About" exact element={<About/>}/>
               <Route path ="/Extra" exact element = {<Extra/>} />
               <Route path ="*" exact element = {<Error/>} />to capture all the error from user input links 404 page not found
               <Route path ="/Country" exact element = {<Country/>}/>

                <Route path="/Univ/USA" exact element = {<USA/>} />
                <Route path="/Univ/IND" exact element = {<INDIA/>} />
                <Route path="/Univ/CHI" exact element = {<CHINA/>} />
                <Route path="/Univ/CAN" exact element = {<CANADA/>} />
                <Route path="/Univ/AUS" exact element = {<AUS/>} />
                <Route path="/Univ/UK" exact element = {<UK/>} />

                <Route path="/usavisa" exact element = {<USAVISA/>} />
                <Route path="/indiavisa" exact element = {<INDIAVISA/>} />
                <Route path="/canadavisa" exact element = {<CANADAVISA/>} />
                <Route path="/chinavisa" exact element = {<CHINAVISA/>} />
                <Route path="/ukvisa" exact element = {<UKVISA/>} />
               <Route path ="/Majors" exact element ={<Majors/>}/>
               <Route path ="Courses" exact element={<Courses/>}/>
               
               <Route path="/ualbany" element={<Ualbany />} />
               <Route path="/SBU" element={<SBU />} />
               <Route path="/UM" element={<UM />} />
               <Route path="/USyd" element={<USyd />} />
               <Route path="/IIT" element={<IIT />}/>
               <Route path="/NIT" element={<NIT />}/>
               <Route path="/UT" element={<UT />}/>
               <Route path="/McG" element={<McG />}/>
               <Route path="/UC" element={<UC />}/>
               <Route path="/UO" element={<UO />}/>
               <Route path="/Peking" element={<Peking />}/>
               <Route path="/Shanghai" element={<Shanghai />}/>
              
              
               <Route path ="/Home1" exact element = {<Home1/>}/>
               <Route path ="/Resources" exact element = {<Home1/>}/>
               <Route path ="/Gmat" exact element = {<Gmat/>}/>
               <Route path ="/Gre" exact element = {<Gre/>}/>
               <Route path ="/Ielts" exact element = {<Ielts/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes