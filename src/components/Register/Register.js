import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Header from '../Header/Header';
import CryptoJS from 'crypto-js';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    // const accounts = await window.ethereum.request({
    //   method: 'eth_requestAccounts',
    // });
    // const address = accounts[0];
    // console.log(address,"Asda")

    event.preventDefault();
    const enrollmentNo = event.target.enrollmentNo.value;
    console.log(typeof(enrollmentNo))
    // You can add additional validation or processing logic here
    // window.alert(enrollmentNo);
    const encryptedEnrollmentNo = CryptoJS.AES.encrypt(enrollmentNo, 'secretKey').toString();
    // Redirect to the next page
    navigate(`/evaluate/${encryptedEnrollmentNo}`);
  };

  

  return (
    <>
      <div className="maincontainer">
        <div className="headerClass"> <Header /> </div>
        <div> <div id="logo-container"></div></div>
        <div className="form-register">
          <header>
            <h1>Register for Professor Evaluation System</h1>
            <form onSubmit={handleSubmit}>
              <div className="button-container">
                <div> <label htmlFor="enrollmentNo">Enrollment No:</label></div>
                <div><input type="text" id="enrollmentNo" name="enrollmentNo" className="input-field" required /></div>
              </div>
              <div>
                <input type="submit" value="Register" className="submit-btn" />
                <p className="error-msg" id="errorMsg"></p>
              </div>
            </form>
          </header>
        </div>
      </div>
    </>
  );
}

export default Register;
