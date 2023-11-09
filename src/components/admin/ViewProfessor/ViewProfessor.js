import React, { useEffect, useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import "./ViewProfessor.css"
import { ethers } from 'ethers';
import { contractaddress, abi } from "../../../contract/contract"


const ViewProfessor = () => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [professors, setProfessors] = useState([]);
  const [name, setName] = useState([]);
  const [pid, setId] = useState([]);

  const fetchData = async () => {
    if (!contract) return; // Make sure contract is available
    try {
      const professorsData = await contract.getProfessors();
      setProfessors(professorsData);
     const intValues = professorsData[0].map(bigNumber => {
         const hexValue = bigNumber.toHexString(); // Convert BigNumber to hex string
         return parseInt(hexValue, 16); // Convert hex string to integer
      });
      setId(intValues);
      setName(professorsData[1])
      
    } catch (error) {
      console.error('Error fetching professors:', error);
    }
  };
  
  useEffect(() => {
  const ethereum = window.ethereum;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const storageContract = new ethers.Contract(contractaddress, abi, signer);
      setProvider(provider);
      setContract(storageContract);
    } else {
      alert('Please install MetaMask');
    }
  }, []);
  return (
    <>  <button onClick={fetchData}>Fetch Data</button>
      <AdminNavigation />
      <h2>View Professor</h2>
      <div className="table-container">
        <table className="evaluation-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
         { pid ? (
           pid.map((id, index) =>
            (
            <tr key={id}>
              <td>{pid[index]}</td> 
              <td>{name[index]}</td>
            </tr>
          )) 
         ) : ("") 
         }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewProfessor;
