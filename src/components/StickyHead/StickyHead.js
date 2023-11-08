// Header.js

import React from 'react';
import './StickyHead.css';
import { useNavigate } from 'react-router-dom';

const StickyHead = () => {
    const navigate = useNavigate()
    const handleAdminLogin = () => {
        navigate("/admin")
    }
  return (
    <div className="headeSticky">
      {/* <h1>My Website</h1> */}
      <button className="admin-button" onClick={handleAdminLogin}>Professor Login</button>
    </div>
  );
};

export default StickyHead;
