import React, { useState } from 'react';
import './Style/Contact.scss';

const Contact = () => {
  // State to capture form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  }; // Closing brace added here

  return ( // Added return statement
    <main>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        <h2 className="section__title">Contact & Fill Our Details </h2>
        {/* <span className="section__subtitle">Get in touch</span> */}

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone-alt contact__icon"></i>
              <div>
                <h3 className="contact__title">Call me</h3>
                <span className="contact__subtitle">(+91) 9791789497</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">E-mail</h3>
                <span className="contact__subtitle">iambazil1995@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="contact__input"
                />
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact__input"
                />
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="contact__input"
              />
            </div>

            <div className="contact__content">
              <label htmlFor="description" className="contact__label">Description</label>
              <textarea
                id="description"
                cols="0"
                rows="7"
                value={formData.description}
                onChange={handleInputChange}
                className="contact__input"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex">
                Send message
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social Section */}
      <section className="social section">
        <h2 className="section__title">Follow me</h2>
        <div className="social__container">
          {/* Facebook */}
          <a href="https://www.facebook.com/bazil.don.39" target="_blank" rel="noreferrer" className="social__icon">
            <i className="fa-brands fa-facebook"></i>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/professor_bazil/" target="_blank" rel="noreferrer" className ="social__icon">
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* Twitter */}
          <a href="#" target="_blank" rel="noreferrer" className="social__icon">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bazil-jani-48655113b/" target="_blank" rel="noreferrer" className="social__icon">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/+919791789497" target="_blank" rel="noreferrer" className="social__icon">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          {/* GitHub */}
          <a href="https://github.com/baziljani" target="_blank" rel="noreferrer" className="social__icon">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <p className="social__copy">&#169; Bazil Jani. All rights reserved.</p>
      </section>
    </main>
  );
};

export default Contact;