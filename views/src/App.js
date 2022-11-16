import './App.css';
import Home from './PAGES/Home';
import { Routes, Route } from "react-router-dom";
import FreeConsultation from './PAGES/FREECONSULTATION/FreeConsultation';
import AboutUs from './PAGES/ABOUTUS/AboutUs'
import Services from './PAGES/SERVICES/Services';

function App() {
  return (
    <div>

<Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/About" element={<AboutUs/>}/>
      <Route path="/FreeConsultation" element={<FreeConsultation/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
