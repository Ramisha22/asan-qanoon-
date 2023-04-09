import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import { Outlet, Link } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideNavbar from "./sidebar";
import { AiFillEdit } from "react-icons/ai";

import { AiTwotoneDelete } from "react-icons/ai";
const Displayfiles = () => {


  
  const [files, setfiles] = useState([]);
  const [show, setshow] = useState(true)
  const showing = () => {
    setshow(!show)
  }
const add=0;
  const storeData = async (id) => {
    console.log(id)
    try {
      await AsyncStorage.setItem('fileid', id);
    } catch (e) {
      throw e;
    }
  };
 
 
  const DeleteFiles = async (id) => {

    await axios.delete("http://localhost:3000/deleteqanoon/" + id)
      .then(() => {

        showing()
      })

  }
  const getfiles = async (e) => {

    await axios.get("http://localhost:3000/getallqanoon").then((response) => {

      setfiles(response.data);
      //  console.log(files)


    });
  }
  useEffect(() => {
    getfiles();

  }, [show])



  return (
    <div >
      <SideNavbar />
      <div className="row">
        <div className="col-lg-12 col-12 grid-margin" style={{ marginLeft: '16%', width: '83%', marginTop: '5%' }}>
          <div className="card">
      
            <div className="card-body">
                  <Link style={{textDecoration:'none'}}  to="/texteditor">
                  <div className='button' style={{ marginTop: '-1%' }}>
                    New File
                  </div>
                </Link>
                <div style={{
                textAlign: 'center', flexDirection: 'row'
              }} >
              <img src={require("./images/ljcp.jpg")} className="mr-2" alt="face" style={{
                width: '4%', height: '4%'
              }} />
                <h4 className="card-title" >Editor Files  </h4>
               
              </div>
              <p className="card-description"> Total Files: {files.length}
              </p>

              <div className="table-responsive">
                <table className="table">
                  <thead >
                    <tr>
                      <th> No:  </th>
                      <th style={{ width: '39%' }}> File Name</th>

                      <th> Created On </th>
                      <th>Edit File </th>
                      <th>Delete File </th>

                    </tr>
                  </thead>

                  <tbody>

                    {files.map((file, index) => (

                      <tr key={file._id}>
                         
                        <td>{index + 1}  </td> 
                      
                        <td>
                          {file.name}</td>
                        <td> {file.created.substring(0, 10)} </td>

                        <td  ><button style={{textDecoration:'none', backgroundColor:'white', borderWidth:0


                      }}> <Link to="/Updatefileeditor" style={{color: 'white',textDecoration: 'none'  }}><AiFillEdit style={{ fontSize: '25px', color: '#1B4235' }}  onClick={() => storeData(file._id)} />  </Link>
                   
          
                   </button> 
                          
                          
                           </td>
                        <td >  
                          
                        <button style={{textDecoration:'none', backgroundColor:'white', borderWidth:0


}}> <Link to="/displayfiles" style={{color: 'white',textDecoration: 'none'  }}><AiTwotoneDelete style={{ fontSize: '25px', color: '#1B4235' }} onClick={() => DeleteFiles(file._id)}  />  </Link>


</button>  </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Displayfiles