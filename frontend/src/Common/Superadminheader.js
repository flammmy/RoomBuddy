import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css'; 
import './Style.css';

const Superadminheader = () => {
    let logout = () => {
        localStorage.clear();
    }

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className='custom-cc'>
                <Navbar.Brand as={Link} to="/" className="header-link">Room Buddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/superadminhome" className="header-link">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/superadminusers" className="header-link"> Users</Nav.Link>
                        <Nav.Link onClick={logout} as={Link} to="/adminlogin" className="header-link">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Superadminheader;
