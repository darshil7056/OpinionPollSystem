import React, { useCallback, useEffect, useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import { useDropzone } from 'react-dropzone';
import "./AddStudent.css"
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { contractaddress,abi } from '../../../contract/contract';

const AddStudent = () => {
    const[stdId,setStdId] = useState();
    const[stdName,setstdName]=useState("")
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader();

        reader.onload = () => {
            const content = reader.result;
            console.log(content); // Here you can process the content of the uploaded file
            const rows = content.trim().split('\n').slice(1); // Split rows and remove header

            const ids = [];
            const names = [];

            rows.forEach(row => {
                const [id, name] = row.split(',');
                ids.push(id.trim());
                names.push(name.trim());
            });
            setStdId(ids);
            setstdName(names);
        };

        reader.readAsText(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const AddStudentFun = async() => {
        if (!provider || !contract) return;

       // const value = ethers.utils.parseUnits(inputValue, 0); // Assuming you're storing in ether
    
        const tx = await contract.addStudents(stdId,stdName);
        await tx.wait();
        alert('Value stored successfully!');
    }
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
        <>
            <AdminNavigation />
            <div className="add-student-container">
                <h2>Add Students</h2>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag & drop an Excel file here, or click to select one</p>
                </div>
            </div>
            <div> <Button onClick={AddStudentFun}>Upload</Button></div>
            <h4></h4>
           
        </>
    );
};

export default AddStudent;
