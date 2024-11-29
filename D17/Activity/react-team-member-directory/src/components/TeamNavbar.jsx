import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const TeamNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          TEAM DIRECTORY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="/teams">
              Members
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TeamNavbar;
