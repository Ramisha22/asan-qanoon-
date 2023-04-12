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
   style={{backgroundColor: 'white',borderRadius: 10,width: '33%',borderwidth:2, height:"540px", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',marginTop:'4%'}}>
     <div className="form-image"style={{marginTop:'2%'}}>
        <img src={require("./images/greenlogo.jpeg")} alt="Form" />
        
</div> 
{/* <div style={{ width: '56%', borderTop: '1px solid black' ,marginBottom:'3px'}} />
<div style={{ width: '50%', borderTop: '1px solid black' }} /> */}

<h4 className="text-center font-weight-light mb-lg-5 mt-3">Sign in</h4>
   <form action="#"  >
      

       <div class="  form-floating mb-1" style={{padding:6, margin:17}}>
           <input  type="email" class="form-control " id="email" size="lg"  placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} required/>
           <label for="floatingInput">Email </label>
          <span id="emailid" > </span>

       </div>
       <div class="form-floating mb-1" style={{padding:6, margin:17}}>
           <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
           <label for="password">Password</label>
        
          <span id="passworddisplay" > </span>

       </div>
       <div style={{marginLeft:'70%', fontSize:14
    }}>
          <h7 className=" text-black" >Forgot password?</h7>
       </div>
     
       <center><Link class="nav-link" to ="/home">
        <button type="button"  class="btn btn-dark mt-4" style={{width: "90%" ,borderRadius:5 ,background: '#1B4235', height:50, marginTop:3}} onSubmit={getuser()} > Login</button>
       </Link>
          

       </center>
      
    
   </form>
</div>


</div>


  )

 

}

export default Login