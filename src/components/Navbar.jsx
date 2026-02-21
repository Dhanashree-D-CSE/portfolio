import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function PortfolioNavbar({ setSection, current }) {
  const handleClick = (e, name) => {
    e.preventDefault();
    if (setSection) setSection(name);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        {/* brand could be a signature or logo */}
        <Navbar.Brand href="#home" onClick={(e) => handleClick(e, "home")}>Dhanashree</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" active={current === "home"} onClick={(e) => handleClick(e, "home")}>Home</Nav.Link>
            <Nav.Link href="#about" active={current === "about"} onClick={(e) => handleClick(e, "about")}>About</Nav.Link>
            <Nav.Link href="#projects" active={current === "projects"} onClick={(e) => handleClick(e, "projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" active={current === "contact"} onClick={(e) => handleClick(e, "contact")}>Contact</Nav.Link>
            {/* optional button to stand out like image */}
            <Nav.Link href="#contact" className="btn btn-outline-light ms-3">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
