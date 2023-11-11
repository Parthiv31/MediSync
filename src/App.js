// MedicineForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { IoMedkit, IoSend, IoTrash } from 'react-icons/io5';

const bodyStyle = {
  background: 'linear-gradient(to left, rgb(4, 14, 50), #34495E)',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row', // Display the boxes side by side
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Roboto, sans-serif',
};

const formBoxStyle = {
  background: 'linear-gradient(to left, rgb(4, 14, 50), #34495E)',
  borderRadius: '5%',
  padding: '3%',
  width: '40%', // Adjust width as needed
  maxWidth: '400px',
  marginRight: '20px', // Add margin for spacing
  overflowY: 'auto',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
};



const scheduledMedicineBoxStyle = {
  ...formBoxStyle,
  width: '30%', // Adjust width as needed
  marginLeft: '20px', // Adjust margin as needed
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const labelStyle = {
  color: '#fff',
  textAlign: 'left',
};

const buttonStyle = {
  margin: '5px',
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
      .post('your-server-endpoint', { medicineList })
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

          <Button variant="primary" onClick={addMedicine} style={buttonStyle}>
            <IoMedkit style={iconStyle} />
            Add Medicine
          </Button>

          <Button variant="success" onClick={sendToServer} style={buttonStyle}>
            <IoSend style={iconStyle} />
            Send to Server
          </Button>
        </Form>
      </div>

      <div style={scheduledMedicineBoxStyle}>
        <h2 className="mt-4 mb-4">Scheduled Medicines</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {medicineList.map((medicine, index) => (
            <li key={index} style={{ textAlign: 'left', marginBottom: '10px' }}>
              {`Medicine: ${medicine.medicineName}, Dosage: ${medicine.dosage}, Duration: ${medicine.duration}, Recipient Number: ${medicine.recipientNumber}`}
              <Button variant="danger" onClick={() => deleteMedicine(index)} className="ms-2" >
            <IoTrash /> Delete
            </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicineForm;
