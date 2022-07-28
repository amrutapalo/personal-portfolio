import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo-amrutapalo.jpg';

const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className="social-item">
                <a href="#">
                    <img src="" alt="" />
                </a>
                <a href="#">
                    <img src="" alt="" />
                </a>
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar; 