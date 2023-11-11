import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff', // Set text color to white
      }}
    >
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <h1
              style={{
                fontSize: '3rem', // Increased font size
                marginBottom: '1rem',
              }}
            >
              Welcome to Medisync
            </h1>
            <p
              style={{
                fontSize: '1.5rem', // Increased font size
                marginBottom: '1.5rem',
              }}
            >
              Medisync is your personal medicine scheduler. Never forget to take your medicine again! Our bot helps you organize and manage your medication schedule easily.
            </p>
            <Button
              variant="primary"
              style={{
                backgroundColor: '#007bff',
                borderColor: '#007bff',
              }}
            >
              Get Started
            </Button>
          </Col>
          <Col md={6} style={{ marginBottom: '10px' }}>
            {/* Add an image or illustration here */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
