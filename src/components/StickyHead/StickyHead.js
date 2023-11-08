// Header.js

import React from 'react';
import './StickyHead.css';
import { useNavigate } from 'react-router-dom';

const StickyHead = () => {
    const navigate = useNavigate()
    const handleAdminLogin = () => {
        navigate("/admin")
    }
    const handleProfessorLogin = () => {
      navigate("/Professor")
  }
  return (
    <div className="headeSticky">
      {/* <h1>My Website</h1> */}
      <button className="admin-button" onClick={handleAdminLogin}>Admin Login</button>
      <button className="admin-button" onClick={handleProfessorLogin}>Professor Login</button>
    </div>
  );
};

export default StickyHead;
