import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./US/Home";
import Ualbany from "./US/UAB"
import Ustony from "./US/SBU"
import Ubuffalo from "./US/SB"
import USHome from "./US/USHome"
import INDHome from "./US/INDHome"
import CHIHome from "./US/CHIHome"
import Ulos from "./US/ULA"
import Peking from "./US/CHINA/Peking"
import Shanghai from "./US/CHINA/Shanghai"
import IIS from "./US/IND/IIS"
import IIT from "./US/IND/IIT"
import NIT from "./US/IND/NIT"

import { Req } from "./US/Requirements/Req"

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/USHome" element={<USHome />} />
          <Route path="/INDHome" element={<INDHome />} />
          <Route path="/CHIHome" element={<CHIHome />} />
          <Route path="/ualbany" element={<Ualbany />} />
          <Route path="/Ustony" element={<Ustony />}/>
          <Route path="/Ubuffalo" element={<Ubuffalo />}/>
          <Route path="/Ulos" element={<Ulos />}/>
          <Route path="/Peking" element={<Peking />}/>
          <Route path="/Shanghai" element={<Shanghai />}/>
          <Route path="/IIS" element={<IIS />}/>
          <Route path="/IIT" element={<IIT />}/>
          <Route path="/NIT" element={<NIT />}/>
          <Route path ="/Req" exact element={<Req/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};