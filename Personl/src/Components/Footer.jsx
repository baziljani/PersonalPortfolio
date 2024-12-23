import React from 'react';
import './Style/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
            <p>Contact Info: <br />
                <span>iambazil1995@gmail.com</span></p>
    </div>
    <div className="footer-center">
      <p>Follow Us:</p>
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-facebook"></i> </a>
        <a href="#"><i className="fa-solid fa-x"></i> </a>
        <a href="#"><i className="fa-brands fa-linkedin"></i> </a>
        <p>&copy; 2023 Bazil Jani. All rights reserved.</p>

      </div>
    </div>
    <div className="footer-right">
      <p>Business Info: <br /> Freelancing (web developer)</p>
    </div>
  </footer>
);

export default Footer;
