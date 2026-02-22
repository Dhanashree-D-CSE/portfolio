import React, { useState } from "react"; 
import "./../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Projects from "./Projects";
import Contact from "./Contact";
import girlAvatar from "../assets/avatar.jpg";
import Experience from "./Experience";
import resume from "../assets/resume.pdf";

import Footer from "./Footer"; 

function Home() {
  const [activeView, setActiveView] = useState('home');

 
  const renderContent = () => {
    if (activeView === 'projects') return <Projects onBack={() => setActiveView('home')} />;
    if (activeView === 'contact') return <Contact onBack={() => setActiveView('home')} />;
    if (activeView === 'experience') return <Experience onBack={() => setActiveView('home')} />;
    
    
    return (
      
          <section className="home hero-section d-flex align-items-center  position-relative overflow-hidden">
      <Container>
        <Row className="align-items-center h-85">
          {/* LEFT SIDE: AVATAR */}
          <Col lg={5} className="d-none d-lg-flex justify-content-center align-items-center">
            <div className="hero-avatar-container">
              <img src={girlAvatar} alt="Developer" className="hero-avatar-img" />
            </div>
          </Col>

          {/* RIGHT SIDE: HERO CONTENT */}
          <Col lg={7} className="ps-lg-5 content-z-index">
            
            <h1 className="hero-title text-center mb-3">
              Hi, I'm <span className="text-teal">Dhanashree</span>
            </h1>

            <h2 className="hero-subtitle text-center mb-4">
              Software Engineer
              <span className="text-muted fw-light ms-2">| 1+ Years Experience</span>
            </h2>

            <p className="hero-desc text-center mb-4">
              Backend-focused software engineer experienced in microservices, database optimization, and building high-performance APIs used in production systems.
            </p>

            {/* Added d-flex to align buttons to the left */}
            <div className="hero-action-btns d-flex mb-4">
              <Button className="btn-teal px-4 py-2 me-3 rounded-0" onClick={() => setActiveView('experience')}>View My Work</Button>
              <a 
              href="/Resume.pdf" 
              download={resume}
              className="text-decoration-none"
            >
              <Button className="btn-outline-teal px-4 py-2 rounded-0">
                Download Resume
              </Button>
            </a>
            </div>

            <div className="hero-nav-btns d-flex gap-2 mt-3">
              {/* <span className="hero-nav-btn" onClick={() => setShowProjects(true)}>
                Projects
              </span> */}
              <a className="hero-nav-btn rounded-0" onClick={() => setActiveView('projects')}>Projects</a>
              {/* <a href="#other" className="hero-nav-btn">Other works</a> */}
              <a href="#blogs" className="hero-nav-btn rounded-0">Blogs</a>
              <a className="hero-nav-btn rounded-0" onClick={() => setActiveView('contact')}>Contact</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      
    );
  };

  return (
    <div className="min-vh-100 d-flex flex-column overflow-hidden">
      <main className="flex-grow-1 overflow-auto custom-scrollbar">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}



export default Home;