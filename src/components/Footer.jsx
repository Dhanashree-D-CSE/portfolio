import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section py-4 bg-white border-top">
      <Container className="text-center">
        <div className="footer-social-links mb-3">
          <a href="https://github.com/Dhanashree-D-CSE" target="_blank" rel="noreferrer" className="footer-icon">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dhanashree-d-59963a1bb" target="_blank" rel="noreferrer" className="footer-icon">
             <i className="bi bi-linkedin" ></i>
          </a>
          <a href="mailto:dhanashree.dhanasekar@gmail.com" className="footer-icon">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        
        <p className="text-muted small mb-0">
          &copy; {currentYear} <span className="text-teal fw-bold">Dhanashree</span>. Built with React & Bootstrap.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;