
import React from 'react'
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MdCached, MdLogout } from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";
import { ImExit } from 'react-icons/im';
import { BsFiles,BsQuestionSquare,BsFillMenuButtonWideFill,BsPatchQuestionFill} from 'react-icons/bs';
import { BiUser,BiHome } from 'react-icons/bi';

import {FaUsers  } from 'react-icons/fa';
const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>



            <nav class="navbar navbar-expand-lg navbar-light" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5' }}>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav col-lg-12 col-12 navbuttons " >
                        <li class="home nav-item d-none d-lg-block d-xl-block vertical-center">
                            <a role="menuitem" style={{ padding: '2%' }}>
                                <img class="logo" src={require('./images/logo.png')} alt="logo" style={{ width: '90%', height: 60 }} /></a>
                        </li>
                        <li style={{ marginLeft: '63%', fontWeight: 'bold', fontSize: '18px' }} class="nav-item navbuttons" >
                            <Link class="nav-link" to="/stats"> <span class="sr-only"></span></Link>
                        </li>

                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link" data-bs-toggle="dropdown"><BiUser style={{ fontSize: '28px' }} /></a>
                            <div class="dropdown-menu">
                                <Link class="dropdown-item" to="/displaymessages">Ramisha<span class="sr-only"></span></Link>
                                <Link class="dropdown-item" to="/displayfiles"><ImExit style={{ margin: '3px' }} /> Logout <span class="sr-only"></span></Link>
                            </div>
                        </div>

                    </ul>
                </div>
            </nav>


            <div className="sidenav">

                <Link to="/home"> Home < BiHome style={{marginLeft: '116px',fontSize: '20px'}}/></Link>
                <a href="#">My Files  < BsFiles style={{marginLeft: '100px',fontSize: '78px'}}/>               
                </a>
                <a href="#">Model Training<BsFillMenuButtonWideFill  style={{marginLeft: '63px'}}/></a>
                <a href="#">FAQs <BsPatchQuestionFill style={{marginLeft: '116px',fontSize: '78px'}}/></a>
                <a href="#">User Management<FaUsers style={{marginLeft: '36px',fontSize: '78px'}}/></a>
            </div>

        </div>

    )
}

export default SideNavbar