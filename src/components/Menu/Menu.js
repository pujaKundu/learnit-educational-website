import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">LearnIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-3">
              <NavLink className="me-3 text-dark" to="/home">
                Home
              </NavLink>
              <NavLink className="me-3 text-dark" to="/about">
                About Us
              </NavLink>
              <NavLink className="me-3 text-dark" to="/courses">
                Courses
              </NavLink>
              <NavLink className="me-3 text-dark" to="/instructors">
                Instructors
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
