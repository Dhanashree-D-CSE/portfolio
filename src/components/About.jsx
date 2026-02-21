import React from "react";
import "./../App.css"

import { Container, Button } from "react-bootstrap";

function About() {
  return (
    <Container className="about text-center text-white py-5">
      <h1>Hello, I'm <span className="text-light">Dhanashree</span></h1>
      <p className="lead">Software Engineer | 1+ Years of Experience</p>
      <Button variant="outline-light" href="#projects">View My Work</Button>
    </Container>
  );
}

export default About;
