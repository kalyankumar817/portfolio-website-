import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css'; // Import the separate CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/komarikakalyankumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/kalyankumar817"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyankumar02001@gmail.com"
          className="icon-link"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">
        © 2024 Kalyan Kumar. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
