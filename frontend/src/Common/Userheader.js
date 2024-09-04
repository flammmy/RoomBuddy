import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../Images/logo2.png';

import './Style.css';


const Userheader = () => {
    let logout = () => {
        localStorage.clear();
    }

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className='custom-cc'>
                <Navbar.Brand as={Link} to="/" className="header-link"> <img className="logo" src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/homepage" className="header-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/mybooking" className="header-link">My Booking</Nav.Link>
                        <Nav.Link as={Link} to="/feedback" className="header-link">Feedback</Nav.Link>
                        {/* <Nav.Link as={Link} to="/userhome" className="header-link">Home</Nav.Link> */}
                        <Nav.Link onClick={logout} as={Link} to="/login" className="header-link">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Userheader;
