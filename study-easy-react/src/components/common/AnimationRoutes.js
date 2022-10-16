import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";
import { Header } from './head/header';
import {AnimatePresence} from 'framer-motion';

function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname} basename = {process.env.PUBLIC_URL}>
        <Route path="/" exact element={<Header/>} />
        </Routes>
    </AnimatePresence>
  )
}


export default AnimationRoutes