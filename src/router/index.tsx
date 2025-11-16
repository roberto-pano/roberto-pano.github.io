import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import screens/pages
import Home from '../screens/Home';
import About from '../screens/About';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';
import MexicanVisualCultureProject from '../screens/MexicanVisualCultureProject';
import Calendar from '../screens/Calendar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mexican-visual-culture" element={<MexicanVisualCultureProject />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* Fallback: redirect any unmatched route to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
