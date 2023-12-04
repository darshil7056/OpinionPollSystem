import React, { useEffect, useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import './AddProfessor.css'; // Import the CSS file
import { ethers } from 'ethers';
import { contractaddress, abi } from "../../../contract/contract"
import { Spinner } from 'react-bootstrap';

const AddProfessor = () => {
  const [professorID, setProfessorID] = useState('');
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddProfessor = async () => {
    // // Implement code to handle adding the professor here
    // console.log(typeof(name),typeof(professorID),typeof(walletAddress))
    setLoading(true);
    if (!provider || !contract) return;
    try {
      // const value = ethers.utils.parseUnits(inputValue, 0); // Assuming you're storing in ether
      const id = ethers.utils.parseUnits(professorID, 0); // Assuming you're storing in ether
      const tx = await contract.addProfessor(id, name, walletAddress);
      const receipt = await tx.wait();
      alert('Value stored successfully! Transaction Hash: ' + receipt.transactionHash);
    } catch (error) {
      console.error('Error while processing transaction:', error);
      
    } finally {
      setLoading(false); // Set loading to false whether the transaction succeeds or fails
    }
  };
  useEffect(() => {
    // This code will run when the component mounts
    const ethereum = window.ethereum;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const storageContract = new ethers.Contract(contractaddress, abi, signer);
      setProvider(provider);
      setContract(storageContract);
      console.log(storageContract)
    } else {
      alert('Please install MetaMask');
    }
    console.log('Component mounted');
  }, []);


  return (
    <>
      <AdminNavigation />
      {loading && (
      <div className="loading-spinner-container">
        <Spinner animation="border" variant="primary" />
      </div>
    )}
      <div className={`add-professor-container  ${loading ? 'loading' : ''}`}>
        <h2>Add Professor</h2>
        <div className="input-group">
          <label>
            Professor ID:</label>
            <input
              type="text"
              value={professorID}
              onChange={(e) => setProfessorID(e.target.value)}
              className="input-field"
            />
          
        </div>
        <div className="input-group">
          <label>
            Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          
        </div>
        <div className="input-group">
          <label>
            Wallet Address:</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="input-field"
            />
          
        </div>
        <button onClick={handleAddProfessor} className="add-professor-button">Add Professor</button>
       
      </div>
     
    </>
  );
};

export default AddProfessor;
