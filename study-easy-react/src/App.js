import './App.css';
// import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import About from "../src/pages/About";
import Home from "../src/pages/Home"
import Extra from '../src/pages/Extra';
import {Country} from "../src/pages/Country";
import Visa from "../src/pages/Visa";
import {University} from '../src/pages/University';
import {Majors}from '../src/components/Majors';
import {Courses}from '../src/components/Courses';
import India  from '../src/pages/India';
import Usa from '../src/pages/Usa';
import Canada from '../src/pages/Canada';
import China from '../src/pages/China';
import Uk from '../src/pages/Uk';


function App() {
  return (
    
    <BrowserRouter>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to = "/About">About</Link></li>
        <li><Link to = "/Extra">Extra</Link></li>
        <li><Link to = "/Country">Country</Link></li>
        <li><Link to = "/Univ">University (Only testing (remove me later))</Link></li>
        <li><Link to="/Visa">Visa Information</Link></li>
      
        
      </ul>
 
    
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path = "/About" exact element={<About/>}/>
        <Route path ="/Extra" exact element = {<Extra/>} />
        <Route path ="/Country" exact element = {<Country/>}/>
        <Route path ="/Visa" element={<Visa/>} />
        <Route path ="/India"  element={<India/>}/>
        <Route path ="/Usa"  element={<Usa/>}/>
        <Route path ="/Canada"  element={<Canada/>}/>
        <Route path ="/China"  element={<China/>}/>
        <Route path ="/Uk"  element={<Uk/>}/>
        <Route path="/Univ" exact element = {<University/>} />
        <Route path ="/Majors" exact element ={<Majors/>}/>
        <Route path ="Courses" exact element={<Courses/>}/>
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
