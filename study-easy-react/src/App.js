import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./US/Home";
import Ualbany from "./US/UAB"
import Ustony from "./US/SBU"
import Ubuffalo from "./US/SB"
import Ulos from "./US/ULA"
import { Req } from "./US/Requirements/Req"

const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ualbany" element={<Ualbany />} />
          <Route path="/Ustony" element={<Ustony />}/>
          <Route path="/Ubuffalo" element={<Ubuffalo />}/>
          <Route path="/Ulos" element={<Ulos />}/>
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