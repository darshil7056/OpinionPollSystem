import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import './Header.css'; // Create a CSS file for additional styling
import Web3 from 'web3';
import { useState } from 'react';

function Header() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const connectToMetaMask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const address = accounts[0];
        setAddress(address);
        setConnected(true);
      //  setWalletAddress(address); // Update the wallet address using the context
        fetchBalance(address);
      } else {
        alert('MetaMask not found. Please install MetaMask to connect.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnectFromMetaMask = async() => {

    setAddress('');
    setBalance('');
    setConnected(false);
    //setWalletAddress(''); // Reset the wallet address to an empty string
  };

  const fetchBalance = async (address) => {
    try {
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(address);
      const formattedBalance = web3.utils.fromWei(balance, 'ether');
   
      setBalance(formattedBalance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

    return (
        <div className="wallet-container">
       <div> <h1 className="super-huge-fancy-text">Connect your MetaMask wallet <br/> to get started </h1>
        </div>  
          <div className='login'>
          {connected ? (
            <>
              <div className='balance'>
                <p>Address: {address}</p>
                <p>Balance: {balance} ETH</p>
              </div>
              <Button className='navlink' onClick={disconnectFromMetaMask}>
                Disconnect Wallet
              </Button>
            </>
          ) : (
            <Button className='navlink ' onClick={connectToMetaMask}>
              Connect Wallet
            </Button>
          )}
        </div>
       
        </div>
      );
}

export default Header;
