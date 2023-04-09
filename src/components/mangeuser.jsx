import React from 'react'
import SideNavbar from './sidebar'
import { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";

import { AiTwotoneDelete } from "react-icons/ai";

const Users = () => {
   
  return (
 
    <div><SideNavbar/>

    <div>
    <div className="col-lg-11 grid-margin stretch-card" style={{marginLeft:'16%', width:'84%', marginTop:'4%'}}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Added Users</h4>
                <p className="card-description"> Total Users: 14
                </p>
                <Link class="nav-link" to="/signup" style={{marginBottom: '20px'}}>
                        <div className='button' >
                            Add User
                        </div>
                </Link>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Contact No </th>
                        <th> Date </th>
                        <th> Edit Profile</th>
                        <th> Delete User</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign: "center"}} ><AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td  style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Messsy Adam </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> July 1, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> John Richards </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> Apr 12, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td>0333-1234567 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Edward </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> May 03, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td> John Doe </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> April 05, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 7 </td>
                        <td> Henry Tom </td>
                        <td>
                      
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> June 16, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 8 </td>
                        <td> Herman Beck </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 9 </td>
                        <td> Messsy Adam </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> July 1, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 10 </td>
                        <td> John Richards </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> Apr 12, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 11 </td>
                        <td> Peter Meggik </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td>0333-1234567 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 12 </td>
                        <td> Edward </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> May 03, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 13 </td>
                        <td> John Doe </td>
                        <td>
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> April 05, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                      <tr>
                        <td> 14 </td>
                        <td> Henry Tom </td>
                        <td>
                      
                        aliahmad@gmail.com
                        </td>
                        <td> 0333-1234567 </td>
                        <td> June 16, 2015 </td>
                        <td style={{textAlign: "center"}}> <AiFillEdit style={{ fontSize: '25px', color:'#1B4235' }}/> </td>
                        <td style={{textAlign: "center"}}>  <AiTwotoneDelete style={{ fontSize: '25px' , color:'#1B4235'}}  /> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div></div>
  )
}

export default Users