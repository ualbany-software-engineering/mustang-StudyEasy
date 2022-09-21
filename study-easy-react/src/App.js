
import './App.css';
import Headertab from './designpages/Headertab';
import Nav from './designpages/Nav.js';
import Bodytab from './designpages/bodytab.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import React from 'react';
import Editing from '../src/designpages/editingcheck.js';
import {Country} from "./Pages/Country";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Extra from './Pages/Extra';
import {University} from './Pages/University';
import {Majors}from './components/Majors';
import {Courses}from './components/Courses';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
           <Routes>
               <Route path="/" exact element={<Home/>} />
               <Route path = "/About" exact element={<About/>}/>
               <Route path ="/Extra" exact element = {<Extra/>} />
               <Route path ="/Country" exact element = {<Country/>}/>
               <Route path="/Univ" exact element = {<University/>} />
               <Route path ="/Majors" exact element ={<Majors/>}/>
               <Route path ="Courses" exact element={<Courses/>}/>
            </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
