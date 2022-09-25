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

import { USAVISA } from '../visapages/usavisa';
import { INDIAVISA } from '../visapages/indiavisa';
// import { INDIA } from '../countrypages/INDIA';
import { CANADAVISA } from '../visapages/canadavisa';
import { CHINAVISA } from '../visapages/chinavisa';
import { UKVISA } from '../visapages/ukvisa';
import Error from "./Error"


function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
               <Route path="/" exact element={<Home/>} />
               <Route path = "/About" exact element={<About/>}/>
               <Route path ="/Extra" exact element = {<Extra/>} />
               <Route path ="*" exact element = {<Error/>} />{/* to capture all the error from user input links 404 page not found */}
               <Route path ="/Country" exact element = {<Country/>}/>

                <Route path="/Univ/USA" exact element = {<USA/>} />
                <Route path="/Univ/IND" exact element = {<INDIA/>} />
                <Route path="/Univ/CHI" exact element = {<CHINA/>} />

                <Route path="/usavisa" exact element = {<USAVISA/>} />
                <Route path="/indiavisa" exact element = {<INDIAVISA/>} />
                <Route path="/canadavisa" exact element = {<CANADAVISA/>} />
                <Route path="/chinavisa" exact element = {<CHINAVISA/>} />
                <Route path="/ukvisa" exact element = {<UKVISA/>} />
               <Route path ="/Majors" exact element ={<Majors/>}/>
               <Route path ="Courses" exact element={<Courses/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes