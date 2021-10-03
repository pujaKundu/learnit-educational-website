import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faLaptop} />;

const Menu = () => {
  return (
    <div>
      <Navbar className="navbar-dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-3">{element}LearnIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-3">
              <NavLink
                className="me-3 text-light text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="me-3 text-light text-decoration-none"
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className="me-3 text-light text-decoration-none"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="me-3 text-light text-decoration-none"
                to="/instructors"
              >
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
