import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";

import {AnimatePresence} from 'framer-motion';
import { Home } from './home/home';

function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname} basename = {process.env.PUBLIC_URL}>
        <Route path="/" exact element={<Home/>} />
        </Routes>
    </AnimatePresence>
  )
}


export default AnimationRoutes