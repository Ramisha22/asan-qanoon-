
import React from 'react'

import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import { useState} from "react";
import axios from 'axios'


const Login = () => { 
    const [email, setemail] = useState("");
    const [password,setpassword]=useState("");
    
const getuser = async () => {
           console.log('abc')
            await axios.post('http://localhost:3000/loginuser', {
                email,password
                
            })
          
        }

  return (
    
    <div className="background-image form-container "style={{flexDirection:'column'}}>
   
   
   <div class="container " 
   style={{backgroundColor: 'white',borderRadius: 20,width: '30%',borderwidth:2, height:"476px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',marginTop:'101px'}}>
     <div className="form-image">
        <img src={require("./images/ljcp.jpg")} alt="Form" />
        
</div> 
{/* <div style={{ width: '56%', borderTop: '1px solid black' ,marginBottom:'3px'}} />
<div style={{ width: '50%', borderTop: '1px solid black' }} /> */}

   <h1 class="text-center mb-lg-5 text">Login</h1>
   <form action="#"  >
      

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

       <center><Link class="nav-link" to ="/home">
       <button type="button"  class="btn btn-dark mt-3" style={{width: "30%" ,borderRadius:20 ,background: '#1B4235'}} onSubmit={getuser()} > Login</button>
       </Link>
       </center>
   </form>
</div>


</div>


  )

 

}

export default Login