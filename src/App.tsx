import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage  from './Layout/LandingPage';



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const App = () => (

        
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    
  
);
