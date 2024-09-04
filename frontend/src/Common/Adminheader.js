import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css'; 
import './Style.css';


const Adminheader = () => {
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
                        {/* <Nav.Link as={Link} to="/adminhome" className="header-link">Home</Nav.Link> */}
                        <Nav.Link as={Link} to="/accountdetails" className="header-link">Account</Nav.Link>
                        <Nav.Link as={Link} to="/addroom" className="header-link">Add Rooms</Nav.Link>
                        <Nav.Link as={Link} to="/viewroom" className="header-link">Rooms</Nav.Link>
                        <Nav.Link as={Link} to="/addgallery" className="header-link">Add to Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" className="header-link">Gallery</Nav.Link>

                        <Nav.Link as={Link} to="/viewbooking" className="header-link">Booking</Nav.Link>
                        <Nav.Link as={Link} to="/viewfeedback" className="header-link">Feedback</Nav.Link>
                        <Nav.Link onClick={logout} as={Link} to="/adminlogin" className="header-link">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Adminheader;
