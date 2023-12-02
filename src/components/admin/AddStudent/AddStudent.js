import React, { useCallback, useEffect, useState } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import { useDropzone } from 'react-dropzone';
import "./AddStudent.css"
import { Button,Spinner} from 'react-bootstrap';
import { ethers } from 'ethers';
import { contractaddress,abi } from '../../../contract/contract';

const AddStudent = () => {
    const[stdId,setStdId] = useState();
    const[stdName,setstdName]=useState("")
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]; // Get the first file from the array
        setFileName(file.name); // Set the file name in state
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

    const AddStudentFun = async () => {
        setLoading(true); 
        if (!provider || !contract) return;

        try {
          // Set loading to true when starting the transaction

            const tx = await contract.addStudents(stdId, stdName);
          const receipt = await tx.wait();
            alert('Value stored successfully! Transaction Hash: ' + receipt.transactionHash);
        } catch (error) {
            console.error('Error while processing transaction:', error);
            alert('Error while processing transaction. Please check the console for details.');
        } finally {
            setLoading(false); // Set loading to false whether the transaction succeeds or fails
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
        <>
            <AdminNavigation />
            <div className={`add-student-container ${loading ? 'loading' : ''}`}>
                <h2>Add Students</h2>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag & drop an Excel file here, or click to select one</p>
                </div>
             {   fileName ?? <p>: {fileName}</p>
}            
            <div> <Button onClick={AddStudentFun}>Upload</Button></div>
            </div>
            {loading && <Spinner animation="border" variant="primary" />} {/* Show Spinner while loading */}
            <h4></h4>
           
        </>
    );
};

export default AddStudent;
