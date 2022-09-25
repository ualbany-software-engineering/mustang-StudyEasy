import Home1 from './Pages/Home1';
import Gre from './Pages/Gre';
import Ielts from './Pages/Ielts';
import Gmat from './Pages/Gmat';
import './resources.css';
import Navbar  from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function resources() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home1/>}/>
          <Route path="/gre" exact element={<Gre/>}/>
          <Route path="/ielts" exact element={<Ielts/>}/>
          <Route path="/gmat" exact element={<Gmat/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default resources;
