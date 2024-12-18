import React, { useState, useEffect,useRef } from 'react';
import './Style/About.scss';

const skillsData = [
  { name: 'HTML', percentage: 90, className: 'skills__html' },
  { name: 'CSS', percentage: 85, className: 'skills__css' },
  { name: 'JavaScript', percentage: 80, className: 'skills__js' },
  { name: 'WordPress', percentage: 70, className: 'skills__wordpress' },
  { name: 'Vue.js', percentage: 75, className: 'skills__vue' },
  { name: 'Android', percentage: 65, className: 'skills__android' },
  { name: 'Figma', percentage: 85, className: 'skills__figma' },
  { name: 'Java', percentage: 60, className: 'skills__java' },
  { name: 'Advanced Java', percentage: 60, className: 'skills__advanced-java' },
  { name: 'JDBC', percentage: 60, className: 'skills__jdbc' },
  { name: 'Python', percentage: 40, className: 'skills__python' },
  { name: 'Power BI', percentage: 50, className: 'skills__powerbi' },
  { name: 'MySQL', percentage: 80, className: 'skills__mysql' },
  { name: 'Excel', percentage: 85, className: 'skills__excel' },
];

const About = () => {
    const [animate, setAnimate] = useState(false);
    const [progressValues, setProgressValues] = useState(
        skillsData.map(() => 0) // Initialize progress bars to 0%
    );
const aboutRef = useRef(null);
    // Function to animate progress bars
    const handleAnimate = () => {
        setAnimate(true);
        setProgressValues(skillsData.map(() => 0)); // Reset progress values to 0
    };

    useEffect(() => {
        if (animate) {
            const interval = setInterval(() => {
                setProgressValues((prev) =>
                    prev.map((value, index) =>
                        value < skillsData[index].percentage
                            ? value + 1
                            : skillsData[index].percentage
                    )
                );
            }, 15); // Adjust speed by changing 15ms

            // Stop the interval when all progress bars reach their target percentage
            if (progressValues.every((value, index) => value >= skillsData[index].percentage)) {
                clearInterval(interval);
                setAnimate(false); // Reset animate state
            }

            return () => clearInterval(interval);
        }
    }, [animate, progressValues]);

    return (
        <section id="about" className="about">
            <h2 className="section-title" onClick={handleAnimate}>
               <a href="#"><u>Skills</u></a>
                <br />
                <span><em>Click Here</em> </span>
            </h2>
            <div className="skills__container">
                {skillsData.map((skill, index) => (
                    <div key={skill.name} className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">{skill.name}</h3>
                            <span className="skills__percentage-value">
                                {progressValues[index]}%
                            </span>
                        </div>
                        <div className="skills__bar">
                            <span
                                className={`skills__percentage ${skill.className}`}
                                style={{ width: `${progressValues[index]}%` }}
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;