import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";

import {AnimatePresence} from 'framer-motion';
import { Home } from './home/home';
// import { Country } from './countries/countries';
import { Selection_countries } from './countries/selection_countries';
import { Login } from './login/login';
import { University } from './universities/university';
import { Team } from './teams/team';
import { Search } from './search/search';
import { Unirecord } from './universities/forjson/unirecord';
import { Review } from './Review/Review';
import Trending from './Trending/Trending'

function AnimationRoutes() {
    const location = useLocation();
  return (
    //animation reuser
    <AnimatePresence>
        <Routes location={location} key={location.pathname} basename = {process.env.PUBLIC_URL}>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Countries" exact element={<Selection_countries/>} />
        <Route path="/Login" exact element={ <Login/> } />
        <Route path="/University" exact element={ <University/> } />
        <Route path="/Team" exact element={ <Team/> } />
        <Route path="/Search" exact element={ <Search/> } />
        <Route path="statewiseuni" exact element = {<Unirecord/>}/>
        <Route path="/Review" exact element={ <Review/> } />
        <Route path="/Trending" exact element={ <Trending/>}/>
        </Routes>
    </AnimatePresence>
  )
}


export default AnimationRoutes