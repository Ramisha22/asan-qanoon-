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
const Landing = () => {
    return (
        <div>
            <nav class="topnav " style={{ width: '100%', height: '74px', position: 'fixed' }}>
                <div >
                    <div style={{ position: 'fixed', width: '25%', height: 60 }} ><img class="logo" src={require('./images/logo.png')} alt="logo" style={{ position: 'fixed', width: '25%', height: 60 }} /></div>
                    <div style={{ position: 'fixed', width: '25%', height: 60, marginLeft: '1427px' }} class="nav-item ">
                        <Link  to="/login" style={{padding:'0px'}}>
                            <div className='button' style={{marginTop:'10px ',width: '141%',marginLeft:'0px' ,height: '43px'}}>
                              Login
                            </div>
                        </Link>   
                    </div>
                    <div class="landing-img">
                           <img  class = "land-jpg"src={require("./images/landing.jpg")} alt="Form" />
                            <div class ="img-div">

                            </div>
                    </div>

                </div>
            </nav >
        </div>
    );
}
export default Landing