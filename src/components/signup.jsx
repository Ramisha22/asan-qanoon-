
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from 'axios'
import SideNavbar from "./sidebar";

const Signup = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [retypepass, setretypepass] = useState("");
    const [contact, setcontact] = useState("");

    const Creatinguser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/createuser', {
            fname, lname, email, password, retypepass, contact

        }).then((data) => {
            alert('User created')
        })
    }
    function validation() {

        var name = document.getElementById('fname').value
        var last = document.getElementById('lname').value
        var email = document.getElementById('email').value
        var pass = document.getElementById('password').value
        var cpass = document.getElementById('retypepassword').value
        var phone = document.getElementById('contactno').value

        if ((name.length <= 2) || (name.length > 20)) {
            document.getElementById('firstname').innerHTML = "Name length must be between 2 and 20!";
            return false;
        }

        if (!(isNaN(name))) {
            document.getElementById('firstname').innerHTML = "Only characters are allowed!";
            return false;

        }
        if ((last.length <= 2) || (last.length > 20)) {
            document.getElementById('lastname').innerHTML = "Name length must be between 2 and 20!";
            return false;
        }
        if (!(isNaN(last))) {
            document.getElementById('lastname').innerHTML = "Only characters are allowed!";
            return false;

        }
        if (pass.length <= 3 || pass.length >= 20) {
            document.getElementById('passworddisplay').innerHTML = "Password length must be between 3 -and 20!";
            return false;
        }

        if (cpass != pass) {
            document.getElementById('displaypassword').innerHTML = "Confirm Password does not match!";
            return false;
        }
        if (phone.length < 11) {
            document.getElementById('contactnumber').innerHTML = "Contact length should not be less then 11!";
            return false;
        }
    }
    console.log('abc')
    return (

        <div >
            <SideNavbar />
            <div className="row">
                <div className="col-lg-12 col-12 grid-margin" style={{ marginLeft: '17%', width: '83%', marginTop: '5%' }}>
                    <div className="card">

                        <div className="card-body">
                            <div style={{
                                textAlign: 'center', flexDirection: 'row'
                            }} >
                                <img src={require("./images/ljcp.jpg")} className="mr-2" alt="face" style={{
                                    width: '4%', height: '4%'
                                }} />
                                <h4 className="card-title" >Add user  </h4>

                            </div>








                            <form action="#" onSubmit= {Creatinguser} >
                                        <div class="form-floating mb-3">

           <input type="text" class="form-control" id="fname" placeholder="firstname" value={fname} onChange={(e) => setfname(e.target.value)}required/>

           <label for="name">First Name</label>
                      <span id="firstname" > </span>
                   </div>


       <div class="form-floating mb-3">

           <input type="text" class="form-control" id="lname" placeholder="lastname" value={lname} onChange={(e) => setlname(e.target.value)} required/>

           <label for="name">Last Name</label>

          <span id="lastname" > </span>
    
          </div>


       <div class="form-floating mb-3">

           <input type="email" class="form-control " id="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} required/>

           <label for="floatingInput">Email address</label>

          <span id="emailid" > </span>


       </div>

       <div class="form-floating mb-3">

           <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>

           <label for="password">Password</label>


          <span id="passworddisplay" > </span>


       </div>

        <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="retypepassword" placeholder="Password" value={retypepass} onChange={(e) => setretypepass(e.target.value)} required/>
                    <label for="retypepassword">Re-Type Password</label>
                   <span id="displaypassword" > </span>

        </div>
                <div class="form-floating ">
                        <input type="number" class="form-control" id="contactno" placeholder="Contact Number"  value={contact} onChange={(e) => setcontact(e.target.value)} required/>
                    <label for="contactnumber">Contact Number</label>

          <span id="contactnumber" > </span>

        </div>

        <center><Link class="nav-link" to ="/home">
       <button type="button"  class="btn btn-dark mt-3" style={{width: "30%" ,borderRadius:20 ,background: '#1B4235'}} >Add</button>
       </Link>
       </center>

   </form>






                            
                        </div>
                    </div>
                </div>
            </div>


        </div>



























        //     <div>

        //    <SideNavbar />

        //    <div class=" con" 
        //    style={{width: '100%',borderwidth:2,height: '200%'}}>
        // <div style={{
        //                 textAlign: 'center', flexDirection: 'row',marginLeft:'-200px'
        //               }} >
        //               <img src={require("./images/ljcp.jpg")} className="mr-2" alt="face" style={{
        //                 width: '4%', height: '4%'
        //               }} />
        //                 <h4 className="card-title" >Add user</h4>

        //               </div>



        //    <h1 class="text-center mb-lg-5"></h1>

        //    <form action="#" onSubmit= {Creatinguser} >
        //        <div class="form-floating mb-3">
        //            <input type="text" class="form-control" id="fname" placeholder="firstname" value={fname} onChange={(e) => setfname(e.target.value)}required/>
        //            <label for="name">First Name</label>
        //           <span id="firstname" > </span>
        //        </div>

        //        <div class="form-floating mb-3">
        //            <input type="text" class="form-control" id="lname" placeholder="lastname" value={lname} onChange={(e) => setlname(e.target.value)} required/>
        //            <label for="name">Last Name</label>
        //           <span id="lastname" > </span>
        //        </div>

        //        <div class="form-floating mb-3">
        //            <input type="email" class="form-control " id="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} required/>
        //            <label for="floatingInput">Email address</label>
        //           <span id="emailid" > </span>

        //        </div>
        //        <div class="form-floating mb-3">
        //            <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
        //            <label for="password">Password</label>

        //           <span id="passworddisplay" > </span>

        //        </div>

        //        <div class="form-floating mb-3">
        //            <input type="password" class="form-control" id="retypepassword" placeholder="Password" value={retypepass} onChange={(e) => setretypepass(e.target.value)} required/>
        //            <label for="retypepassword">Re-Type Password</label>
        //           <span id="displaypassword" > </span>

        //        </div>

        //        <div class="form-floating ">
        //            <input type="number" class="form-control" id="contactno" placeholder="Contact Number"  value={contact} onChange={(e) => setcontact(e.target.value)} required/>
        //            <label for="contactnumber">Contact Number</label>
        //           <span id="contactnumber" > </span>

        //        </div>
        //        <center> <button type="submit" class="btn btn-dark mt-3" style={{width: "30%" ,borderRadius:20}} > 
        //        <Link to="/stats" style={{color: 'white',textDecoration: 'none'  }}>
        //               Sign up
        //             </Link>
        //       </button>
        //        </center>
        //    </form>
        // </div>

        // </div>


    )



}

export default Signup