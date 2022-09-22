import './App.css';
// import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Extra from './Pages/Extra';
import {Country} from "./Pages/Country";
import {University} from './Pages/University';
import {Majors}from './components/Majors';
import {Courses}from './components/Courses';


function App() {
  return (
    
    <BrowserRouter>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to = "/About">About</Link></li>
        <li><Link to = "/Extra">Extra</Link></li>
        <li><Link to = "/Country">Country</Link></li>
        <li><Link to = "/Univ">University (Only testing (remove me later))</Link></li>
        
      </ul>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path = "/About" exact element={<About/>}/>
        <Route path ="/Extra" exact element = {<Extra/>} />
        <Route path ="/Country" exact element = {<Country/>}/>
        <Route path="/Univ" exact element = {<University/>} />
        <Route path ="/Majors" exact element ={<Majors/>}/>
        <Route path ="Courses" exact element={<Courses/>}/>
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;