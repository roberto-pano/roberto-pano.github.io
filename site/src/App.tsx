import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MexicanVisualCultureProject from './pages/MexicanVisualCultureProject';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/mexicanvisualcultureproject"
            element={<MexicanVisualCultureProject />}
          />
        </Routes>
      </main>
    </div>
  );
}
