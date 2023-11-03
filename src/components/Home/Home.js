import React from 'react';
import './Home.css'; // Assuming styles.css is in the same directory as this component
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function TeacherEvaluationSystem() {
const navigate = useNavigate();
const buttonClick = () => {
    navigate("/register")
}
  return (
    <div>
      <header className = "head">
        <h1>Welcome to Professor Evaluation System</h1>
        <p>Revolutionizing the way students evaluate their professors' performance.</p>
        <Button className="btn" onClick={buttonClick}>Get Started </Button>
      </header>
    </div>
  );
}

export default TeacherEvaluationSystem;
