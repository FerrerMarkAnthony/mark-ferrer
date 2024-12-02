import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="bg-body-tertiary nav text-uppercase"
    >
      <Container>
        <Navbar.Brand className="fw-bold custom-navbar-brand" href="#home">
          Product Showcase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="/products" className="me-3">
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
