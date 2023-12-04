import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header';
import CryptoJS from 'crypto-js';
import homeimg from "../../images/homeimg.jpg"
import { ethers } from 'ethers';
import { contractaddress,abi } from '../../contract/contract';

function Register() {
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  const handleSubmit = async(event) => {
    try{
      event.preventDefault();
    const enrollmentNo = event.target.enrollmentNo.value;
    if (!provider || !contract) return;

    // const value = ethers.utils.parseUnits(inputValue, 0); // Assuming you're storing in ether
 
     const tx = await contract.verifyStudent(enrollmentNo);
     await tx.wait();
     alert('Value successfull!');
    // You can add additional validation or processing logic here
    // window.alert(enrollmentNo);
   // const encryptedEnrollmentNo = CryptoJS.AES.encrypt(enrollmentNo, 'secretKey').toString();
    // Redirect to the next page
    navigate(`/evaluate`);
    }catch(error){
      alert('Execution reverted: Student ID does not exist');
      console.log(error.message.message)
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
    <><div><img className="imgRegister" src={homeimg} /></div>
     <div className="headerClass"  style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}> <Header /> </div>
    <div className="register-container">
      
      <div className="maincontainer ">
       
        <div> <div id="logo-container"></div></div>
        <div className="form-register">
          <header>
            <h1>Register for Evaluation System</h1>
            <form onSubmit={handleSubmit}>
              <div className="button-container">
                <div> <label htmlFor="enrollmentNo">Enrollment No:</label></div>
                <div><input autocomplete="off" type="text" id="enrollmentNo" name="enrollmentNo" className="input-field" required /></div>
              </div>
              <div>
                <input type="submit" value="Register" className="submit-btn" />
                <p className="error-msg" id="errorMsg"></p>
              </div>
            </form>
          </header>
        </div>
      </div>
    </div></>
  );
}

export default Register;
