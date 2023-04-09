
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

            <SideNavbar />
            <div className='min'>
                <h1 className='tainmodel'>
                    Train Model
                </h1>
                <div style={{
                    background: "rgb(215 212 212 / 30%)",
                    padding: '40px',
                    marginLeft: '69px',
                    marginRight: '66px'
                    ,height:'580px'
                }}>
                    <div>
                    
                        <div className='button' >
                        <Link to="/uploadText" style={{textDecoration: 'none' ,color:'white'}}>Upload via from</Link>
                        </div>
                        <label class="form-label" for="customFile" className='tainmodel9'>Select an excel file</label>
                        <input type="file" class="form-control" id="customFile" style={{
                            marginLeft: '11%',color: '#198754',
                            margintop: '240px', width: '50%', alignItems: 'center', marginTop: 10
                        }} onChange={handleFileUpload} />
                    </div>
                    <label class="form-label" for="customFile" className='tainmodel9'>view excel file</label>
                    <div className='tablehead'>
                            Categories
                    </div>
                    <div style={{ marginTop:'20px',height: '340px',padding:'30px', overflow: 'scroll' }}>
                    
                        <table className="striped-table">
                            <tbody>

                                {data.slice(1).map((row, index) => (
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
                            Train
                        </div>
                    </Link>
                </div>

            </div>

        </div>




    )



}


export default ModelTrain