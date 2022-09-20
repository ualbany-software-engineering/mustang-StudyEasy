
import './App.css';
import Headertab from './designpages/Headertab';
import Nav from './designpages/Nav.js';
import Bodytab from './designpages/bodytab.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import React from 'react';
import Editing from '../src/designpages/editingcheck.js';

function App() {
  return (

    <React.StrictMode>
    <BrowserRouter>
    <div className="App">
      {/*header*/}
      <Headertab />
      {/* <Nav /> */}
      <Bodytab/>
      <Routes>
            <Route path="/Editing" element={<Editing />} />
      </Routes>
      {/*body*/}
      {/*footer page*/}
    </div>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
