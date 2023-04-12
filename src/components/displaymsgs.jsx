import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import { AiFillEdit } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import SideNavbar from "./sidebar";

const Displaymessages = (props) => {
  const [messages, setmessages] = useState([]);
  const [search, setsearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getmessages = async (e) => {

    await axios.get("http://localhost:3000/getallmessage").then((response) => {

      setmessages(response.data);
      //  console.log(messages)


    });
  }
  useEffect(() => {
    getmessages();

    searchfunc();
  }, [messages])
  const handleInputChange = (event) => {
    setsearch(event.target.value);
    searchfunc(event.target.value);
  }

  const searchfunc = () => {
    if (search !== "") {
      const newarray = messages.filter((msg) => {
        return Object.values(msg)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newarray)
    } else {
      setSearchResults(messages);
    }
  }

  return (
    <div >
      <SideNavbar />

      <div>
      <div style={{ flexDirection: 'row', marginTop: '5%', marginBottom: 5, width: '100%', height: 60, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', borderRadius: 0, border: 'none' }}>



<form action="/search" >

  <input type="text" style={{ marginTop: 10, border: 'none', padding: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', borderRadius: '5px 0 0 5px', fontSize: '16px', width: '50%', marginLeft: '25%' }}
    msg={search.length < 1 ? messages : searchResults}
    value={search}
    placeholder=" Filter Messages"
    dir="rtl"
    onChange={handleInputChange}

  />  <button   style={{ backgroundColor: '#1B4235', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', padding: '10px' }}><i className="fa fa-search" style={{ fontSize: '20px' }}></i></button></form>



</div>



        <div className="row">
          <div className="col-lg-12 col-12 grid-margin" style={{ marginLeft: '16%', width: '83%', marginTop: '1%' }}>
            <div className="card">

              <div className="card-body">

                <div style={{
                  textAlign: 'left'
                }} >
                  <h4 className="card-title" >Frequently Asked Questions  </h4>

                </div>
                <p className="card-description"> Total : {messages.length}
                </p>

                <div className="table-responsive">
                  <table className="table">
                    <thead >
                      <tr>


                        <th>Delete Question </th>
                        <th> Created On </th>

                        <th style={{ width: '40%' }}> Questions Asked</th>

                        <th> Serial No.  </th>

                      </tr>
                    </thead>

                    <tbody>

                      {searchResults.map((searchResults, index) => (

                        <tr key={searchResults._id}>

                          <td >

                            <button style={{
                              textDecoration: 'none', backgroundColor: 'white', borderWidth: 0


                            }}> <AiTwotoneDelete style={{ fontSize: '25px', color: '#1B4235' }} />


                            </button>  </td>

                          <td> {searchResults.created.substring(0, 10)} </td>

                          <td>  {searchResults.msg}</td>
                          <td>{index + 1}  </td>

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
      
    </div>

  );
};
export default Displaymessages