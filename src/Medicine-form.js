import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { IoMedkit, IoSend, IoTrash } from 'react-icons/io5';


const bodyStyle = {
  background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
  color: '#f4f4f4',
  fontFamily: '"Lato", sans-serif',
  // No need for minHeight or padding here if you're applying it globally
};

const formContainerStyle = {
  background: '#2c3e50',
  borderRadius: '16px',
  padding: '2rem',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  margin: '1rem',
};

const inputStyle = {
  marginBottom: '1rem',
};

const buttonStyle = {
  margin: '5px auto',
  display: 'block',
};

const listGroupItemStyle = {
  background: '#34495e',
  color: '#f4f4f4',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '0.75rem 1rem',
  margin: '0.5rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const MedicineForm = () => {
  const [medicineList, setMedicineList] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [duration, setDuration] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [apiCalled, setApiCalled] = useState(false);

  const addMedicine = () => {
    if (medicineName && dosage && duration && recipientNumber) {
      const newMedicine = { medicineName, dosage, duration, recipientNumber };
      setMedicineList([...medicineList, newMedicine]);
      setMedicineName('');
      setDosage('');
      setDuration('');
      setRecipientNumber('');
    }
  };

  const deleteMedicine = (index) => {
    const updatedMedicineList = [...medicineList];
    updatedMedicineList.splice(index, 1);
    setMedicineList(updatedMedicineList);
  };

  const sendToServer = () => {
    axios
      .post('your-server-endpoint', { medicineList })
      .then((response) => {
        console.log('Server response:', response.data);
        setApiCalled(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // ... existing state hooks

  // ... existing functions

  return (
    <Container style={bodyStyle}>
      <Row className="justify-content-center">
        <Col md={5} style={formContainerStyle}>
          <h2>Add Medicine</h2>
          <Form>
            {/* ... Form Groups with updated inputStyle */}
          </Form>
          <Button variant="primary" onClick={addMedicine} style={buttonStyle}>
            <IoMedkit className="me-2" />
            Add Medicine
          </Button>
          <Button variant="success" onClick={sendToServer} style={buttonStyle}>
            <IoSend className="me-2" />
            Send to Server
          </Button>
        </Col>

        <Col md={5} style={formContainerStyle}>
          <h2>Scheduled Medicines</h2>
          {apiCalled && <Alert variant="success">Medicine list sent successfully!</Alert>}
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {/* ... List of medicines with updated listGroupItemStyle */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicineForm;