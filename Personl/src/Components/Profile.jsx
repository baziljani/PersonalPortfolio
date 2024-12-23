import React, { useState } from 'react';
import './Style/Profile.scss';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const splitText = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="letter">{letter}</span>
    ));
  };

  return (
    <section id="profile" className="profile">
      <h2>My Profile</h2>
      <p className="highlight">Name: Bazil Jani</p>
      <p className="highlight">Profession: Full Stack Developer</p>
      <p className="highlight">Location: Bengaluru, India</p>
      <p className="bio highlight">Bio: Passionate about building impactful software solutions. Experienced in backend and frontend development.</p>
      
      <h2 className="qualification__title">Qualification</h2>
      <span className="qualification__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => handleTabClick('education')}
          >
            <i className="fa-solid fa-graduation-cap"></i>
                <b>Education</b>
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => handleTabClick('work')}
          >
            <i className="fa-solid fa-briefcase"></i>
                <b>Work</b>
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Content */}
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} id="education">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("SSLC")}</h3>
                <span className="qualification__subtitle">Government Boys Higher Secondary School, Mathur, Tamilnadu</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2009 - 2010
                </div>
              </div>
            </div>

            {/* Additional Education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("HSC")}</h3>
                <span className="qualification__subtitle">Government Boys Higher Secondary School, Mathur, Tamilnadu</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2011 - 2012
                </div>
              </div>
            </div>

                      {/* More education items */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("DECE")}</h3>
                <span className="qualification__subtitle">KET Polytechnic College, Krishnagiri, Tamilnadu</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  20012 - 2014
                </div>
              </div>
            </div>
              <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("BE (ECE)")}</h3>
                <span className="qualification__subtitle">Government College of Engineering, Bargur, Tamilnadu</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2014 - 2017
                </div>
              </div>
             </div>
          </div>

          {/* Work Content */}
          <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("Customer Relationship Officer")}</h3>
                <span className="qualification__subtitle">HGS, Bengaluru</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Oct 2017 - May 2019
                </div>
              </div>
            </div>

            {/* Additional Work */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("L2- System Support")}</h3>
                <span className="qualification__subtitle">Hathway, Bengaluru</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  June 2019 - Dec 2019
                </div>
              </div>
            </div>

                      {/* More work items */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("Service Engineer")}</h3>
                <span className="qualification__subtitle">Maintec, Chennai</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jan 2020 - Aug 2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("Lecturer")}</h3>
                <span className="qualification__subtitle">KET, Krishnagiri</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Sept 2020 - May 2023
                </div>
              </div>
            </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{splitText("Freelance Web Developer")}</h3>
                <span className="qualification__subtitle">Bengaluru</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  June 2023 - Present
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
