import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
  useEffect(() => {
    // Port of header.js prompt behavior — prompt once per browser (localStorage)
    try {
      const seen = localStorage.getItem('promptResponse');
      if (!seen) {
        const sign = window.prompt('Are you having a great day?');
        if (sign) {
          const s = sign.toLowerCase();
          if (s === 'yes') {
            alert('Great! Glad to hear :)');
          } else if (s === 'no') {
            alert('I am sorry to hear that, I hope it gets better!');
          } else {
            alert('No worries!');
          }
        }
        localStorage.setItem('promptResponse', 'true');
      }
    } catch (e) {
      // ignore if localStorage not available
    }
  }, []);

  return (
    <nav className="sidebar">
      <NavLink
        to="/"
        end
        className={({isActive}) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({isActive}) => (isActive ? 'active' : '')}>
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({isActive}) => (isActive ? 'active' : '')}>
        Contact
      </NavLink>
      <NavLink
        to="/calendar"
        className={({isActive}) => (isActive ? 'active' : '')}>
        Calendar
      </NavLink>
      <NavLink
        to="/mexicanvisualcultureproject"
        className={({isActive}) => (isActive ? 'active' : '')}>
        Mexican Visual Culture Final Project
      </NavLink>
    </nav>
  );
}
