import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import { Outlet, Link } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Displayfiles = () => {
  const [files, setfiles] = useState([]);
  const [show, setshow] = useState(true)
  const showing = () => {
    setshow(!show)
  }

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
      <Navbar />

      <div class="col-lg-12  col-md-6 ">
        <div style={{ background: "rgb(146, 146, 146, 0.3)", marginTop: 10, marginBottom: 5, marginLeft: '0%', width: '100%', height: 60}}>

          <h2 style={{ color: '#1D4537', display: 'inline',padding: 12, marginLeft: '5%' }}>ALL FILES</h2>
          <Link class="nav-link" to="/texteditor">
            <div className='button' style={{marginTop:'-2%'}}>
              new blank document
            </div>
          </Link>
        </div>

        {files !== [] ? (

          <div className="blur-background">
            {files.map((elem) => {
              return (
                <button style={{ backgroundColor: 'white', width: '15%', height: 170, alignContent: 'center', justifyContent: "center", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', margin: 10, borderRadius: 20, border: 'none' }}>
                  <a href="#" data-bs-toggle="dropdown" >
                    <img class="logo" src={require('./images/ellipses.png')} alt="logo" style={{ width: '10%', height: 25, marginLeft: '90%' }} />
                  </a>
                  <div class="dropdown-menu"  >


                    <button style={{ color: 'white', width: '90%', backgroundColor: '#B88364', padding: 1, margin: 5, borderColor: 'black', border: 'none', borderRadius: 10, }} onClick={() => storeData(elem._id)}  >

                      <Link to="/Updatefileeditor" style={{ color: 'white', textDecoration: 'none' }}>
                        Open
                      </Link>
                    </button>
                    <button style={{ color: 'white', width: '90%', backgroundColor: '#B88364', padding: 1, marginTop: 10, margin: 5, borderColor: 'black', border: 'none', borderRadius: 10, }} onClick={() => DeleteFiles(elem._id)}  >Delete</button>

                  </div>
                  <div key={elem._id} >
                    <img class="logo" src={require('./images/filesvector.png')} alt="logo" style={{ width: '30%', height: 70 }} />
                    <h4>{elem.name}</h4>



                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div>No Files data available</div>
        )}
      </div>

    </div>
  );
};
export default Displayfiles



