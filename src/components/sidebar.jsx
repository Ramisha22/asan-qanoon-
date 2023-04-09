
import React from 'react'
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MdCached, MdGpsFixed, MdLogout } from 'react-icons/md';
import { Outlet, Link } from "react-router-dom";
import { ImExit } from 'react-icons/im';
import { BsFiles, BsQuestionSquare, BsFillMenuButtonWideFill, BsPatchQuestionFill } from 'react-icons/bs';
import { BiUser, BiHome } from 'react-icons/bi';

import { FaUsers } from 'react-icons/fa';
const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <nav class="topnav " style={{ width: '100%', height: '74px', position: 'fixed'}}>
                <div >
                    <div style={{ position: 'fixed', width: '25%', height: 60 }} ><img class="logo" src={require('./images/logo.png')} alt="logo" style={{ position: 'fixed', width: '25%', height: 60 }} /></div>
                    <div style={{ position: 'fixed', width: '25%', height: 60 ,marginLeft:'1431px'  }}  class="nav-item dropdown">
                            <a href="#" class="nav-link" data-bs-toggle="dropdown"><BiUser style={{ fontSize: '28px' ,color:'black' }} /></a>
                            <div class="dropdown-menu"style={{ position: 'absolute'}} >
                                <Link class="dropdown-item"  to="/">Ramisha<span class="sr-only"></span></Link>
                                <Link class="dropdown-item" to="/"><ImExit style={{ margin: '3px' }} /> Logout <span class="sr-only"></span></Link>
                            </div>
                    </div>

                </div>
                

                {/* <ul>
                        <li class="home nav-item d-none d-lg-block d-xl-block vertical-center">
                            <a role="menuitem" style={{ padding: '2%' }}>
                                <img class="logo" src={require('./images/logo.png')} alt="logo" style={{ position:'fixed',width: '25%', height: 60 }} /></a>
                        </li>
                        <li style={{ marginLeft: '63%', fontWeight: 'bold', fontSize: '18px' }} class="nav-item navbuttons" >
                            <Link class="nav-link" to="/stats"> <span class="sr-only"></span></Link>
                        </li>

                        

                    </ul>
                </div> */}
            </nav >


    <div className="sidenav">

        <Link to="/home"> Home < BiHome style={{ marginLeft: '116px', fontSize: '20px' }} /></Link>
        <Link to ='/displayfiles'>My Files  < BsFiles style={{ marginLeft: '100px', fontSize: '78px' }} />
        </Link>
        <Link to="/modeltraing">Model Training<BsFillMenuButtonWideFill style={{ marginLeft: '63px' }} /></Link>
        <Link to="/displaymessages">FAQs <BsPatchQuestionFill style={{ marginLeft: '116px', fontSize: '78px' }} /></Link>
        <Link to="/users">User Management<FaUsers style={{ marginLeft: '36px', fontSize: '78px' }} /></Link>
    </div>

        </div >

    )
}

export default SideNavbar