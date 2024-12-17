
import React from 'react';
import './Style/About.scss';

const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <div className="skills">
      {[
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 85 },
        { name: 'JavaScript', percentage: 80 },
      ].map(skill => (
        <div className="skill" key={skill.name}>
          <span>{skill.name}</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.percentage}%` }}>
              <span className="percentage">{skill.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;