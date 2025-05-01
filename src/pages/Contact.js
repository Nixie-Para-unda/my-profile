import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitted: true,
        isError: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server
    // This is just a simulation for demonstration purposes
    setFormStatus({
      isSubmitted: true,
      isError: false,
      message: 'Your message has been sent successfully! I will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        isSubmitted: false,
        isError: false,
        message: ''
      });
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      <h1 className="section-title">Contact Me</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question, want to work together, or just want to say hello,
            I'd love to hear from you! Fill out the form or reach out through any of the
            platforms below.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p><a href="mailto:paraundanixie82@gmail.com">paraundanixie82@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-text">
                <h3>GitHub</h3>
                <p><a href="https://github.com/Nixie-Paraunda" target="_blank" rel="noopener noreferrer">github.com/Nixie-Paraunda</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-text">
                <h3>LinkedIn</h3>
                <p><a href="https://linkedin.com/in/njparaunda99" target="_blank" rel="noopener noreferrer">linkedin.com/in/njparaunda99</a></p>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>Cabuyao, Laguna</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            {formStatus.isSubmitted && (
              <div className={`form-status ${formStatus.isError ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
            
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;