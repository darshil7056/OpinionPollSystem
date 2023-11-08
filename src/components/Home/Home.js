import React from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import homeimg from "../../images/homeimg.jpg"
import StickyHead from "../StickyHead/StickyHead";


function Home() {
const navigate = useNavigate();
const buttonClick = () => {
    navigate("/register")
}
  return (
       
      <>
      <StickyHead />
      <div><img className="imgHome" src={homeimg} /></div>

      <div className="home-container">Welcome to Opinion Poll System</div>
      <div className="phome-container">Revolutionizing the way students evaluate their professors</div>
     <div className="bt-container"> <Button className="btn" onClick={buttonClick}>Get Started </Button></div>
     
      </>
  );
}

export default Home;
