import React, { useEffect, useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import './AddProfessor.css'; // Import the CSS file
import { ethers } from 'ethers';
import { contractaddress,abi } from "../../../contract/contract"

const AddProfessor = () => {
  const [professorID, setProfessorID] = useState('');
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const handleAddProfessor = async() => {
    // Implement code to handle adding the professor here
    console.log(typeof(name),typeof(professorID),typeof(walletAddress))
    if (!provider || !contract) return;

   // const value = ethers.utils.parseUnits(inputValue, 0); // Assuming you're storing in ether
   const id = ethers.utils.parseUnits(professorID, 0); // Assuming you're storing in ether
    const tx = await contract.addProfessor(id,name,walletAddress);
    await tx.wait();
    alert('Value stored successfully!');

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
