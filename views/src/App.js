import './App.css';
import Home from './PAGES/Home';
import { Routes, Route } from "react-router-dom";
import FreeConsultation from './PAGES/FREECONSULTATION/FreeConsultation';
import AboutUs from './PAGES/ABOUTUS/AboutUs'
import Services from './PAGES/SERVICES/Services';
import Submitted from './PAGES/FREECONSULTATION/Submitted';
import Admin from './PAGES/ADMINPANEL/Admin';
import Login from './PAGES/LOGIN/Login';

function App() {
  return (
    <div className='App'>

<Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/About" element={<AboutUs/>}/>
      <Route path="/FreeConsultation" element={<FreeConsultation/>}/>
      <Route path="/FormSubmitted" element={<Submitted/>}/>
      <Route path='/adminPanel' element = {<Admin/>}/>
      <Route path='/login' element = {<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
