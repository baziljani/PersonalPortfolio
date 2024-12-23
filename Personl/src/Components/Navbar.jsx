import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from'./logo.png'
import './Style/Navbar.scss';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  // Effect to apply dark theme class
  useEffect(() => {
    const body = document.querySelector('body'); // Change '.Sass' to 'body'
    if (isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="Bazil Jani Logo" className='logo-image' /></div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink></li>
        <i
          className={`fa-regular ${isDarkTheme ? 'fa-moon' : 'fa-sun'} change-theme`}
          id="theme-toggle"
          onClick={toggleTheme}
        ></i>
      </ul>
    </nav>
  );
};

export default Navbar;
