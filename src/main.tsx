import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // if you're using Tailwind or custom CSS
import {App} from './App'
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode> 
    <BrowserRouter basename="/mymizara"> 
      <App />
    </BrowserRouter>  
  </React.StrictMode>
);
