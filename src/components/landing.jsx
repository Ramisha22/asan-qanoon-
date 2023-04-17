import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import { Outlet, Link } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideNavbar from "./sidebar";
import { AiFillEdit } from "react-icons/ai";
import { ImExit } from 'react-icons/im';
import { BsFiles, BsQuestionSquare, BsFillMenuButtonWideFill, BsPatchQuestionFill } from 'react-icons/bs';
import { BiUser, BiHome } from 'react-icons/bi';

import { FaUsers } from 'react-icons/fa';
import { AiTwotoneDelete } from "react-icons/ai";
// const Landing = () => {
//     return (
//         <div>
//             <nav class="topnav " style={{ width: '100%', height: '74px', position: 'fixed' }}>
//                 <div >
//                     <div style={{ position: 'fixed', width: '25%', height: 60 }} ><img class="logo" src={require('./images/logo.png')} alt="logo" style={{ position: 'fixed', width: '25%', height: 60 }} /></div>
//                     <div style={{ position: 'fixed', width: '25%', height: 60, marginLeft: '1427px' }} class="nav-item ">
//                         <Link  to="/login" style={{padding:'0px'}}>
//                             <div className='button' style={{marginTop:'10px ',width: '141%',marginLeft:'0px' ,height: '43px'}}>
//                               Login
//                             </div>
//                         </Link>   
//                     </div>
//                     <div class="landing-img">
//                            <img  class = "land-jpg"src={require("./images/landing.jpg")} alt="Form" />
//                             <div class ="img-div">

//                             </div>
//                     </div>

//                 </div>
//             </nav >
//         </div>
//     );
// }
const Landing = () => {
    return (
      <div>
        <nav class="topnav " style={{ width: '100%', height: '74px', position: 'fixed' }}>
          <div >
            <div style={{ position: 'fixed', width: '25%', height: 60 }} ><img class="logo" src={require('./images/logo.png')} alt="logo" style={{ position: 'fixed', width: '25%', height: 60 }} /></div>
            <div style={{ position: 'fixed', width: '25%', height: 60, marginLeft: '1427px' }} class="nav-item ">
              <Link to="/login" style={{padding:'0px'}}>
                <div className='button' style={{marginTop:'10px ',width: '141%',marginLeft:'0px' ,height: '43px'}}>
                  Login
                </div>
              </Link>   
            </div>
            <div class="landing-img">
              <img  class = "land-jpg"src={require("./images/landing.jpg")} alt="Form" />
              <div class ="img-div">

                <div style={{padding:'44px',position: 'absolute',height: '301px', top: '392%', left: '42%', transform: 'translate(-50%, -50%)' ,    background: 'rgba(0, 0, 0, 0.4) '}}>
                <h2 style={{color:'#eed4a6',    fontSize:' 24px'}}>Law & Justice Commission of Pakistan</h2>
                  <p style={{color:'white',marginTop:'32px'}}>
The Law & Justice Commission of Pakistan is a Federal Government institution, headed by the Chief Justice of Pakistan and comprises other members including the Chief Justice of Federal Shariat Court,  Chief Justices of the High Courts, Attorney General for Pakistan, Secretary, Ministry of Law, Justice and Human Rights and  the Chairperson of National Commission on the Status of Women. The Commission comprises of Four other members, one from each province, appointed by the Federal Government, on the recommendation of the Chairman, in consultation with the Chief Justice of concerned High Court from amongst the persons who are or have been holders of a judicial or administrative office,  eminent lawyers or jurists, persons of repute and integrity from civil society, members of the Council of Islamic Ideology or teachers of law in a university or college  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
export default Landing