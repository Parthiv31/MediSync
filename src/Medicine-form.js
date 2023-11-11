// MedicineForm.js
import React, { useState } from 'react';
import { Form, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import { IoMedkit, IoSend, IoTrash } from 'react-icons/io5';

const bodyStyle = {
  background: 'linear-gradient(to right, #50adfa, #4e90c7)',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Roboto, sans-serif',
  margin: 0, // Remove default margins
  overflow: 'hidden', // Prevent scrolling on the body
};
  
  const formBoxStyle = {
    background: '#415d94',
    borderRadius: '2%',
    padding: '1rem',
    width: '40%', // Adjust width as needed
    maxWidth: '400px',
    margin: '1rem', // Add margin for spacing
    overflowY: 'auto',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  };
const scheduledMedicineBoxStyle = {
  ...formBoxStyle,
  borderRadius: '1.5%',
  
};

const labelStyle = {
  color: '#fff',
  fontWeight: 'bold',
};

const ButtonStyle = {
  margin: '1rem',
  background: '#045db0',
  borderColor: '#004cff',
  borderRadius: '1rem',
  color: '#fff',
  transition: 'background 0.3s, color 0.3s',
};

const iconStyle = {
  marginRight: '5px',
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
      .post('https://b8f8-103-163-113-106.ngrok-free.app/getMeds ', { medicineList })
      .then((response) => {
        console.log('Server response:', response.data);
        setApiCalled(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={bodyStyle}>
      <div style={formBoxStyle}>
        <h2 className="mt-4 mb-4">Add Medicine</h2>
        <Form>
          <Form.Group controlId="medicineName">
            <Form.Label style={labelStyle}>Medicine Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter medicine name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="dosage">
            <Form.Label style={labelStyle}>Dosage:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="duration">
            <Form.Label style={labelStyle}>Duration:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="recipientNumber">
            <Form.Label style={labelStyle}>Recipient Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter recipient number"
              value={recipientNumber}
              onChange={(e) => setRecipientNumber(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={addMedicine} style={ButtonStyle}>
            <IoMedkit style={iconStyle} />
            Add Medicine
          </Button>

          
        </Form>
      </div>

      <div style={scheduledMedicineBoxStyle}>
        <h2 className="mt-4 mb-4">Scheduled Medicines</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {medicineList.map((medicine, index) => (
            <li key={index}>
              <div >
                <strong>Medicine:</strong> {medicine.medicineName}, <strong>Dosage:</strong> {medicine.dosage}, <strong>Duration:</strong> {medicine.duration}, <strong>Recipient Number:</strong> {medicine.recipientNumber}
              </div>
              <Button variant="danger" onClick={() => deleteMedicine(index)}>
                <IoTrash />
              </Button>
           </li>
            
          ))}

        </ul>
        <Button variant="success" onClick={sendToServer} style={ButtonStyle}>
            <IoSend style={iconStyle} />
            Send to Server
          </Button>
      </div>
    </div>
  );
};

export default MedicineForm;