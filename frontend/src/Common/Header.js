import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import logo from '../Images/logo2.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="custom-cc">
        <Navbar.Brand href="/" className="header-link d-flex align-items-center">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="header-link">Home</Nav.Link>
            <Nav.Link href="/about" className="header-link">About Us</Nav.Link>
            <Nav.Link href="/contact" className="header-link">Contact</Nav.Link>
            <Nav.Link href="/login" className="header-link">User Login</Nav.Link>
            {/* <Nav.Link href="/adminlogin" className="header-link">Admin Login</Nav.Link> */}
            <Nav.Link href="/signup" className="header-link">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;