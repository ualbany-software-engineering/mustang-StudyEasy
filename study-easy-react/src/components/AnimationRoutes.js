import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {Country} from "../pages/Country";
import Home from "../pages/Home";
import About from "../pages/About";
import Extra from '../pages/Extra';
import {University} from '../pages/University';
import {Majors}from '../components/Majors';
import {Courses}from '../components/Courses';
import {AnimatePresence} from 'framer-motion';
import { CollegeDisplay } from '../pages/CollegeDisplay';
import  {USA}  from '../countrypages/USA';
import { USAVISA } from '../visapages/usavisa';
import { INDIAVISA } from '../visapages/indiavisa';
import { INDIA } from '../countrypages/INDIA';
import { CANADAVISA } from '../visapages/canadavisa';
import { CHINAVISA } from '../visapages/chinavisa';
import { UKVISA } from '../visapages/ukvisa';


function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
               <Route path="/" exact element={<Home/>} />
               <Route path = "/About" exact element={<About/>}/>
               <Route path ="/Extra" exact element = {<Extra/>} />
               <Route path ="/Country" exact element = {<Country/>}/>
                <Route path="/Univ/USA" exact element = {<USA/>} />
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