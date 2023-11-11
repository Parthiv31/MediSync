import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavScrollExample() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#282a36' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '140px' }} navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              activeClassName="active-link"
              style={{
                background: '#ffffff', // Text color (white)
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/addmedicine"
              activeClassName="active-link"
              style={{
                background: '#ffffff', // Text color (white)
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
              }}
            >
              AddMedicine
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Dashboard"
              activeClassName="active-link"
              style={{
                background: '#ffffff', // Text color (white)
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
              }}
            >
              Dashboard
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
