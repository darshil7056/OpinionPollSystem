import React, { useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import './AddProfessor.css'; // Import the CSS file

const AddProfessor = () => {
  const [professorID, setProfessorID] = useState('');
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleAddProfessor = () => {
    // Implement code to handle adding the professor here
    console.log(name,professorID,walletAddress)

  };

  return (
    <>
      <AdminNavigation />
      <div className="add-professor-container">
        <h2>Add Professor</h2>
        <div className="input-group">
          <label>
            Professor ID:
            <input 
              type="text" 
              value={professorID} 
              onChange={(e) => setProfessorID(e.target.value)} 
              className="input-field"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="input-field"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Wallet Address:
            <input 
              type="text" 
              value={walletAddress} 
              onChange={(e) => setWalletAddress(e.target.value)} 
              className="input-field"
            />
          </label>
        </div>
        <button onClick={handleAddProfessor} className="add-professor-button">Add Professor</button>
      </div>
    </>
  );
};

export default AddProfessor;
