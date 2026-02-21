import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Contact = ({ onBack }) => {
  return (
    <section className="contact-section py-5 bg-light min-vh-100">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <button onClick={onBack} className="btn btn-outline-teal mb-3">
            ← Back to Home
          </button>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <Row className="justify-content-center align-items-center g-5">
          {/* LEFT SIDE: INFO */}
          <Col lg={5}>
            

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon-box me-3">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <p className="small text-muted mb-0">Mail me at</p>
                <p className="fw-bold mb-0">dhanashree.dhanasekar@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item d-flex align-items-center mb-4">
            <div className="contact-icon-box me-3">
              {/* This adds the Bootstrap phone icon */}
              <i className="bi bi-telephone"></i> 
            </div>
            <div>
              <p className="small text-muted mb-0">Call me at</p>
              <p className="fw-bold mb-0">+91 7548800257</p>
            </div>
          </div>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <div className="contact-icon-box me-3">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <p className="small text-muted mb-0">Location</p>
                <p className="fw-bold mb-0">Bangalore, India</p>
              </div>
            </div>

            {/* GITHUB ITEM */}
            <div className="contact-info-item d-flex align-items-center mb-4">
              <a 
                href="https://github.com/Dhanashree-D-CSE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center text-decoration-none text-dark w-100"
              >
                <div className="contact-icon-box me-3">
                  <i className="bi bi-github"></i>
                </div>
                <div>
                  <p className="small text-muted mb-0">GitHub</p>
                  <p className="fw-bold mb-0">github.com/Dhanashree-D-CSE</p>
                </div>
              </a>
            </div>

            <div className="contact-info-item d-flex align-items-center mb-4">
              <a 
                href="https://www.linkedin.com/in/dhanashree-d-59963a1bb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center text-decoration-none text-dark w-100"
              >
                <div className="contact-icon-box me-3">
                  {/* Bootstrap Icon: LinkedIn */}
                  <i className="bi bi-linkedin" ></i>
                </div>
                <div>
                  <p className="small text-muted mb-0">LinkedIn</p>
                  <p className="fw-bold mb-0">linkedin.com/in/dhanashree-d-59963a1bb</p>
                </div>
              </a>
            </div>
            {/* LEETCODE ITEM */}
            {/* <div className="contact-info-item d-flex align-items-center mb-4">
              <a 
                href="https://leetcode.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center text-decoration-none text-dark w-100"
              >
                <div className="contact-icon-box me-3">
                  {/* Bootstrap Icon: Braces with an asterisk is a great fit for LeetCode */}
                  {/* <i className="bi bi-braces-asterisk" style={{ fontSize: '20px', color: '#20c997' }}></i>
                </div>
                <div>
                  <p className="small text-muted mb-0">LeetCode</p>
                  <p className="fw-bold mb-0">leetcode.com/yourusername</p>
                </div>
              </a>
            </div> */} 
          </Col>

          {/* RIGHT SIDE: FORM */}
          <Col lg={6}>
            <div className="contact-form-card shadow-sm p-4 p-md-5 w-80 h-75 bg-white">
              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="small fw-bold">Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="small fw-bold">Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" className="custom-input" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="small fw-bold">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="write..." className="custom-input" />
                </Form.Group>

                <Button variant="teal" type="submit" className="w-100 py-3 fw-bold btn-teal">
                  Send Message <i className="bi bi-send-fill ms-2"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;