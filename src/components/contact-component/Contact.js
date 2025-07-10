import React from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p>Interested in working together? Let's have a conversation.</p>
      <div className="contact-location">
        <FaMapMarkerAlt /> <span>Bengaluru, Karnataka</span>
      </div>
      <div className="contact-buttons">
        <a href="mailto:lolzop9@gmail.com" className="btn-primary">
          <FaEnvelope /> Get in Touch
        </a>
        <a href="Hithesh_R.pdf" download className="btn-secondary">
          <FaFileAlt /> View Resume
        </a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/hithesh-r7" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/hithesh-r-871548247/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Contact;
