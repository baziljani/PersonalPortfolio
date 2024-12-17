import React from 'react';
import './Style/Home.scss';
import Bazil_pic from './Bazil_pic.jpg';
const Home = () => (
  <section id="home" className="home">
    <div className="hero">
      <img src={Bazil_pic} alt="Hero" className="hero-image" />
      <div className="hero-details">
        <h1>Welcome to My Portfolio</h1>
                <p>Bazil Jani</p>
                <p>Web Developer</p>
      </div>
    </div>
  </section>
);

export default Home;