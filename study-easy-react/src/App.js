import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./US/Home";
import Ualbany from "./US/UAB"
import Ustony from "./US/SBU"
import Ubuffalo from "./US/SB"
import USHome from "./US/USHome"
import INDHome from "./US/INDHome"
import CHIHome from "./US/CHIHome"
import AUSHome from "./US/AUSHome"
import CANHome from "./US/CANHome"
import UKHome from "./US/UKHome"
import Ulos from "./US/ULA"
import Peking from "./US/CHINA/Peking"
import Shanghai from "./US/CHINA/Shanghai"
import IIS from "./US/IND/IIS"
import IIT from "./US/IND/IIT"
import NIT from "./US/IND/NIT"
import McG from "./US/CANADA/McG"
import UT from "./US/CANADA/UT"
import { Req } from "./US/Requirements/Req"
import UC from "./US/UK/UC";
import UO from "./US/UK/UO";
import UM from "./US/AUS/UM";
import USyd from "./US/AUS/USyd";
const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/USHome" element={<USHome />} />
          <Route path="/INDHome" element={<INDHome />} />
          <Route path="/CHIHome" element={<CHIHome />} />
          <Route path="/AUSHome" element={<AUSHome />} />
          <Route path="/CANHome" element={<CANHome />} />
          <Route path="/UKHome" element={<UKHome />} />
          <Route path="/ualbany" element={<Ualbany />} />
          <Route path="/Ustony" element={<Ustony />}/>
          <Route path="/Ubuffalo" element={<Ubuffalo />}/>
          <Route path="/Ulos" element={<Ulos />}/>
          <Route path="/UC" element={<UC />}/>
          <Route path="/UO" element={<UO />}/>
          <Route path="/UM" element={<UM />}/>
          <Route path="/USyd" element={<USyd />}/>
          <Route path="/UT" element={<UT />}/>
          <Route path="/McG" element={<McG />}/>
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