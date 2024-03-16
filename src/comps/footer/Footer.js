import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css"; // Import CSS file for styling

// The `Footer` component renders a footer section with the name, copyright year, and social media icons (LinkedIn and GitHub).
// It embeds dynamic content for the name and current year.
// Social media icons are rendered using the `react-icons/fa` library.
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Gal Katzav";

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          {name} &copy; {currentYear}. All rights reserved.
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/gal-katzav-5b9b4a26a/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GalKatzav/Universities-Final-App-React.git"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
