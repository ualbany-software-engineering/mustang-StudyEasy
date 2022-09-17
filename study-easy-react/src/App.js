
import './App.css';
import Headertab from './designpages/Headertab';
import Nav from './designpages/Nav.js';
import Bodytab from './designpages/bodytab.js';
function App() {
  return (
    <div className="App">
      {/*header*/}
      <Headertab />
      {/* <Nav /> */}
      <Bodytab/>
      {/*body*/}
      {/*footer page*/}
    </div>
  );
}

export default App;
