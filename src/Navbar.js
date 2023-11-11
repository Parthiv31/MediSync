import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
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
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item
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
                
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/action4"
                activeClassName="active-link"
                style={{
                  background: '#ffffff', // Text color (white)
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textDecoration: 'none',
                }}
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/action5"
                activeClassName="active-link"
                style={{
                  background: '#ffffff', // Text color (white)
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textDecoration: 'none',
                }}
              >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <img
            src=""
            alt="Your Image"
            style={{ width: '50px', height: '50px', marginRight: '20px' }} // Adjust the width, height, and margin as needed
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
