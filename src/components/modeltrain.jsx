
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import { useState, useEffect, button } from "react";
import axios from 'axios'
import './App.css';
import * as XLSX from 'xlsx';
import SideNavbar from './sidebar';


const ModelTrain = () => {
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = event.target.result;
            const workbook = XLSX.read(fileData, { type: 'binary' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setData(data);
        };
        reader.readAsBinaryString(file);
    };


    return (
        <div>

            <SideNavbar/>
                <div style={{display:'flex'}} >
                    <h1 className='tainmodel content'>
                        Train Model
                    </h1>
                    <div style={{
                        background: "rgb(146, 146, 146, 0.3)",
                        width: '1214px',
                        height: '537px',
                        marginLeft: '11%',
                        top: '240px'
                    }}>
                        <div>
                            <div className='button' >
                                Upload text
                            </div>
                            <label class="form-label" for="customFile" className='tainmodel'>Select an excel file</label>
                            <input type="file" class="form-control" id="customFile" style={{
                                marginLeft: '11%',
                                margintop: '240px', width: '50%', alignItems: 'center', marginTop: 10
                            }} onChange={handleFileUpload} />
                        </div>
                        <label class="form-label" for="customFile" className='tainmodel'>view excel file</label>
                        <div style={{ height: '350px', overflow: 'scroll' }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>family laws</th>
                                        <th>civil laws</th>
                                        <th>criminal laws</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row[0]}</td>
                                            <td>{row[1]}</td>
                                            <td>{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                        <Link class="nav-link" to="/">
                            <div className='button' >
                                Upload
                            </div>
                        </Link>
                    </div>

                </div>

            </div>




    )



}


export default ModelTrain