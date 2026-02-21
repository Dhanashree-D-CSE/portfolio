import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import flashCover from '../assets/project1.jpg';
import cogniCover from '../assets/project2.jpg';
import botnetCover from '../assets/project3.jpg';

const Projects = ({ onBack }) => {
  const projectList = [
    {
      title: "Flashlearn",
      description: " Developed a personalized flashcard learning platform featuring an adaptive spaced repetition algorithm,JWT-based secure authentication, and collaborative deck-sharing among peers. Enhanced user engagement through a clean analytics dashboard, resulting in a 40% improvement in memory retention for users..",
      image: flashCover,
      tags: ["React", "Spring Boot", "Postgres", "JWT"],
      live: "#",
      code: "https://github.com/Dhanashree-D-CSE/FlashLearn.git"
    },
    {
      title: "Cogni Coach",
      description: "Android application designed to assist dementia patients and their caregivers by providing essential tools for safety, routine management, and quick access to important information. The app enables users to securely store documents, track patient location in real time, set reminders, and manage daily tasks",
      image: cogniCover, 
      tags: ["Android Studio", "Firebase"],
      live: "#",
      code: "https://github.com/Dhanashree-D-CSE/CogniCoach.git"
    },
    {
      title: "Intrusion Detection",
      description: "Built an ensemble-based meta-learner combining Random Forest, XGBoost, and AdaBoost to leverage the strengths of individual models for detecting attacks in an SDN environment. Emulated a virtual SDN network using Mininet and the RYU controller, generated synthetic attack traffic, and evaluated the system, achieving 98% detection accuracy.",
      image: botnetCover, 
      tags: ["Machine Learning", "Python", "SDN simulation"],
      live: "#",
      code: "https://ieeexplore.ieee.org/document/10649533",
      isPaper: true
    }
  ];

  return (
    <section className="py-5 bg-light min-vh-100">
      <Container>
        <div className="text-center mb-5">
          <button onClick={onBack} className="btn btn-outline-teal mb-3">
            ← Back to Home
          </button>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>

        <Row className="g-4">
          {projectList.map((project, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="project-card h-100 border-0 shadow-sm">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={project.image} />
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted small mb-4">
                    {project.description}
                  </Card.Text>
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} bg="light" className="tag-badge">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                    {/* <a href={project.live} className="project-link">
                      <i className="bi bi-box-arrow-up-right me-2"></i>Live Demo
                    </a> */}
                    <a href={project.code} className="project-link">
                      {project.isPaper ? (
                        <>
                          <i className="bi bi-file-earmark-text me-2"></i>View Paper
                        </>
                      ) : (
                        <>
                          <i className="bi bi-github me-2"></i>Source Code
                        </>
                      )}
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;