import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {Country} from "../Pages/Country";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Extra from '../Pages/Extra';
import {University} from '../Pages/University';
import {Majors}from '../components/Majors';
import {Courses}from '../components/Courses';
import {AnimatePresence} from 'framer-motion';
import { CollegeDisplay } from '../Pages/CollegeDisplay';
import  {USA}  from '../countrypages/USA';


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


               <Route path ="/Majors" exact element ={<Majors/>}/>
               <Route path ="Courses" exact element={<Courses/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimationRoutes