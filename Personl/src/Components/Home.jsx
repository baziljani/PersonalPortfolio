import React from 'react';
import './Style/Home.scss';
import Bazil_pic from './Bazil_pic.jpg';

const Home = () => (
  <section id="home" className="home">
    <div className="hero">
      {/* Left Section: Image */}
      <div className="hero-image-container">
        <img src={Bazil_pic} alt="Hero" className="hero-image" />
      </div>

      {/* Right Section: Hero Details */}
      <div className="hero-details-box">
        <h2>Bazil Jani</h2>
        <p>Web Developer</p>
        <p>Professional Skills: HTML, CSS, JavaScript, React</p>
        <p>Passionate about creating beautiful and functional web experiences.</p>
      </div>
    </div>
  </section>
);

export default Home;
