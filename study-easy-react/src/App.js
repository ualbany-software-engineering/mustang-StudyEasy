import './App.css';
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';

function App() {
 
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <div className="App">
      
    </div>
    </BrowserRouter>
  );
}

export default App;