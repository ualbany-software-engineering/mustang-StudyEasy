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
import CreateComment from "../../Pages/CreateComment";
import Comment from "../../Pages/Comment";

import AddMajors from '../../CollegeAdministrators/addMajors';
import UpdateDeleteMajor from '../../CollegeAdministrators/UpdateOrDelete';
import AdminAdd from "../../CollegeAdministrators/stonyBrookAdmi/stonyBrookAdd";
import AdminUpdateOrDelete from "../../CollegeAdministrators/stonyBrookAdmi/stonyBrookUpdateOrDelete";
import Admin from "../../Pages/Admin";

import Resources from "./Resources/Resources"
import Ielts from './Resources/data/ielts';
import Gre from './Resources/data/gre';
import Gmat from './Resources/data/gmat';
import Sat from './Resources/data/sat';
import Toefl from './Resources/data/toefl';
import Bitsat from './Resources/data/bitsat';
import { Collegedetails } from './details/collegedetails';
import { Trending } from './trendingcolleges/trending';

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

        <Route path="/statewiseuni" exact element = {<Unirecord/>}/>
        <Route path="/uni" exact element = {<Collegedetails/>}/>
        <Route path="/Trending" exact element = {<Trending/>}/>
{/* review edit */}
        <Route path="/CreateComment" exact element={<CreateComment/>} />
        <Route path="/Comment" exact element={<Comment />} />

{/* srujan work */}
        <Route path="/AddMajors" exact element={<AddMajors />} />
        <Route
          path="/UpdateDeleteMajor"
          exact
          element={<UpdateDeleteMajor />}
        />
        <Route
          path="/AdminUpdateOrDelete"
          exact
          element={<AdminUpdateOrDelete />}
        />
        <Route path="/AdminAdd" exact element={<AdminAdd />} />
        <Route path="/Admin" exact element={<Admin />} />

        {/* resources */}
        <Route path="/Resources" exact element={<Resources/>}/>
        <Route path="/ielts" exact element={<Ielts/>}/>
        <Route path="/gre" exact element={<Gre/>}/>
        <Route path="/gmat" exact element={<Gmat/>}/>
        <Route path="/toefl" exact element={<Toefl/>}/>
        <Route path="/sat" exact element={<Sat/>}/>
        <Route path="/bitsat" exact element={<Bitsat/>}/>
        </Routes>
    </AnimatePresence>
  )
}


export default AnimationRoutes