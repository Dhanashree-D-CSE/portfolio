import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const Experience = ({ onBack }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Fiorano Software Technologies",
      location: "Bangalore, India",
      period: "2024 - Present",
      description: [
      "Redesigned a distributed document-tracking system to offload database writes, reducing central server load by 30% and improving scalability.",
      "Optimized analytics pipelines and database queries, cutting data volume by 76%.",
      "Built a real-time event broadcasting service via Server-Sent Events (SSE), enabling API Management server to push live updates directly to dashboards.",
      "Contributed to the development of a high-performance GraphQL server using Apollo to streamline data aggregation from multiple REST APIs"
    ],
      tags: ["Java", "Jersey", "TypeScript","SQL","NoSQL", "GraphQL", "RestAPIs"],
      type: "work"
    },
    {
      title: "Research Intern",
      company: "IIT Guwahati",
      location: "India",
      period: "Apr 2022 - Aug 2022",
      description: "Proposed and implemented an efficient anonymous routing algorithm for on-chip networks, outperformingtraditional onion routing.",
      tags: ["C++", "Python", "NoC", "gem5"],
      type: "work"
    },
    {
        title: "Bachelor of Engineering in Computer Science",
        company: "PSG Institute of Technology and Applied Research",
        location: "Coimbatore, India",
        period: "2020 - 2024",
        description: "Graduated with 9.12/10 CGPA, securing Anna university rank.",
        tags: ["AI","Machine learning","Python","Flask","Data Structures", "Algorithms", "DBMS","OOPs"],
        type: "edu"
      }
  ];

  return (
    <section className="experience-section py-5 bg-light min-vh-100">
      <Container>
        <div className="text-center mb-5">
          <button onClick={onBack} className="btn btn-outline-teal mb-3">
            ← Back to Home
          </button>
          <h2 className="section-title">Experience & Education</h2>
          <div className="title-underline"></div>
        </div>

        <div className="timeline-container position-relative">
          {/* Central Line */}
          <div className="timeline-line d-none d-lg-block"></div>

          {experiences.map((item, index) => (
            <Row key={index} className={`mb-5 align-items-center timeline-row ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              {/* Card Side */}
              <Col lg={5} md={12}>
                <div className="timeline-card shadow-sm p-4 bg-white">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg="light" className="text-teal mb-2">
                      <i className={`bi ${item.type === 'work' ? 'bi-calendar3' : 'bi-mortarboard'} me-2`}></i>
                      {item.period}
                    </Badge>
                  </div>
                  <h4 className="fw-bold mb-1">{item.title}</h4>
                  <h6 className="text-teal mb-2">{item.company}</h6>
                  <p className="small text-muted mb-3">
                    <i className="bi bi-geo-alt me-1"></i>{item.location}
                  </p>
                  <ul className="text-secondary small mb-3 ps-3">
                    {Array.isArray(item.description) ? (
                        item.description.map((point, i) => (
                        <li key={i} className="mb-1">{point}</li>
                        ))
                    ) : (
                        <li>{item.description}</li>
                    )}
                    </ul>
                  <div className="d-flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <Badge key={i} bg="light" className="tag-badge">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Col>

              {/* Icon Side (Middle) */}
              <Col lg={2} className="d-none d-lg-flex justify-content-center position-relative">
                <div className="timeline-icon">
                  <i className={`bi ${item.type === 'work' ? 'bi-briefcase' : 'bi-book'}`}></i>
                </div>
              </Col>

              {/* Empty Space for the other side */}
              <Col lg={5} className="d-none d-lg-block"></Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;