import "./App.css";
import Headertab from "./designpages/Headertab";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import AnimationRoutes from "./components/AnimationRoutes";
// import Bodytab from './designpages/bodytab';
import "./firbase-config";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Headertab />
      <div className="App">
        <AnimationRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
