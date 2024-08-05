import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="social-links">
          <a href="https://github.com/Roychen651" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a href="http://linkedin.com/in/roychen651/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/roychen.97" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
        <div className="footer-text">
          <p>© 2024 Roy's Gym. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
