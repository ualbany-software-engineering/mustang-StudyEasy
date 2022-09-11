import './App.css';
// import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Extra from './Pages/Extra';
import {University} from './Pages/University';

function App() {
  return (
    
    <BrowserRouter>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to = "/About">About</Link></li>
        <li><Link to = "/Extra">Extra</Link></li>
        <li><Link to = "/Univ">University (put country)</Link></li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path = "/About" exact element={<About/>}/>
        <Route path ="/Extra" exact element = {<Extra/>} />
        <Route path="/Univ" exact element = {<University/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
