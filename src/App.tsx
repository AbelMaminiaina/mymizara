import './App.css'

import { Routes, Route } from 'react-router-dom';
import LandingPage  from './Layout/LandingPage';



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FaireUnDon from './pages/FaireUnDon';

export const App = () => (
        
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faireundon" element={<FaireUnDon />} />
      </Routes>
    
  
);
