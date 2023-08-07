import React from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import TnCs from './pages/TnCs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Career } from './pages/Career';
import ScrollToTop from './pages/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="terms-and-conditions" element={ <TnCs /> } />
          <Route path="privacy-policy" element={ <PrivacyPolicy /> } />
          <Route path="career" element={ <Career /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
