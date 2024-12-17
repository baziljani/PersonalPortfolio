import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Style/Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">MyLogo</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  </nav>
);

export default Navbar;
