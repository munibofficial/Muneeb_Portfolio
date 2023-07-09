import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand onClick={() => scrollToSection('profile')}>
          Muneeb Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link onClick={() => scrollToSection('profile')}>
              Profile
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('project')}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com">
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link href="https://www.github.com">
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
