import logo from './logo.svg';
import './App.css';
import { INDIA } from './pages/India';
import { USA } from './pages/Usa';
import { CANADA } from './pages/Canada';
import { CHINA } from './pages/China';
import indiaflag from '../src/images/indian_flag.png';
import usaflag from '../src/images/usa_flag.png';
import canadaflag from '../src/images/canada_flag.png';
import chinaflag from '../src/images/china_flag.png';
import {BrowserRouter as Router, Switch, Routes, Route,Redirect, Link, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <div className='container'>  
      <Link to ="/INDIA" className='links linkindia'><img className='img' src={indiaflag}></img>
      <div className='overlay unselectable'>INDIA</div></Link></div>

      <div className='container'>  
      <Link to = "/USA" className='links linkusa'><img className='img' src={usaflag}></img>
      <div className='overlay unselectable'>USA</div>
      </Link>
      </div>
      <div className='container'>
        <Link to = "/CANADA" className='links linkcanada'><img className='img' src={canadaflag}></img>
        <div className='overlay unselectable'> CANADA</div>
        </Link></div>
        <div className='container'>
        <Link to = "/CHINA" className='links linkchina'><img className='img' src={chinaflag}></img>
        <div className='overlay unselectable'>CHINA</div>
        </Link></div>
        
      
      <Routes>
        <Route path="/INDIA" exact element={<INDIA/>} />
        <Route path = "/USA" exact element={<USA/>}/>
        <Route path ="/CANADA" exact element = {<CANADA/>} />
        <Route path ="/CHINA" exact element = {<CHINA/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
