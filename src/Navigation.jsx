import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        {/* Added some padding to give space for the logo */}
        <Navbar.Brand as={Link} to="/" style={{ paddingRight: '20px' }}>
          Medisync
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/addmedicine">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/action2">
              Link
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          {/* Removed the search form */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;