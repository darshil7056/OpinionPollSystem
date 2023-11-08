import React, { useCallback } from 'react';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import { useDropzone } from 'react-dropzone';
import "./AddStudent.css"
import { Button } from 'react-bootstrap';

const AddStudent = () => {
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
            
            console.log('IDs:', ids);
            console.log('Names:', names);
        };

        reader.readAsText(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
            <h4></h4>
            <Button>Upload</Button>
        </>
    );
};

export default AddStudent;
