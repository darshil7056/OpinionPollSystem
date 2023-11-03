import React, { useState } from 'react';
import { ethers } from 'ethers';
import { contractaddress,abi } from '../contract/contract';

const Test = () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Initialize the provider and contract
  const initialize = async () => {
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
  };

  const handleStore = async () => {
    if (!provider || !contract) return;

    const value = ethers.utils.parseUnits(inputValue, 0); // Assuming you're storing in ether

    const tx = await contract.verifyStudent(value);
    await tx.wait();
    alert('Value stored successfully!');
  };

  const handleRetrieve = async () => {
    if (!contract) return;

    const value = await contract.getVerifiedStudents();
    console.log(value)
    setStoredValue(value.toString());
  };

  return (
    <div>
      <h2>Storage Interaction</h2>
      <button onClick={initialize}>Initialize</button>
      <div>
        <label>
          Input Value:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button onClick={handleStore}>Store Value</button>
      </div>
      <button onClick={handleRetrieve}>Retrieve Value</button>
      <div>Stored Value: {storedValue}</div>
    </div>
  );
};

export default Test;
