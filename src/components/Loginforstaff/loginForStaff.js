import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from "../micro-logo.png";
import '../add.css';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


import axios from 'axios';
export default function Stafflogin() {

    const handelsubmit = async (event) => {
        event.preventDefault();
       
       


        
        var email = document.getElementById("email").value;
        
        var password = document.getElementById("password").value;
        const user={
            email:"",
            password:""
        }

        
         if (email === '' || email === null) {
            alert("Enter your username");
        }
       
        else if (password === '' || password === null) {
            alert("Enter your password");
        }
        else {
            user.email=email;
            user.password=password;
            console.log(user)
            await axios.post("http://192.168.253.177:8080/kgm/check/trainer",{"email":email,"password":password})
                .then(function (res){
                    console.log(res)
                    if (res.data.responseMsg === 'failure') {
                        alert('failure');
                        window.location.reload();
                    }
                    else if (res.data.responseMsg === 'success') {
                        alert("success");
                        window.location.href = "./communicationstaff";

                    }
                })
            // await fetch("http://192.168.253.177:8080/kgm/check/trainer",{method:"GET",user})
            //     .then(function (res) {
            //         console.log(res)
            //         .then(function (res) {
            //         console.log(res)
            //         if (res.data.setResponseMsg === 'failure') {
            //             alert('failure');
            //             window.location.reload();
            //         }
            //         else if (res.data.setResponseMsg === 'success') {
            //             alert("success");
            //             window.location.href = "./communicationstaff";

            //         }
            //     })
            //     })
            //     .catch(function (err) {
            //         alert(err);
            //         window.location.reload();
            //     })
        }
    }
    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <img src={img} className='col-lg-12' />
                    </div>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-4'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center mt-3 bg-light p-2'>
                        <h1>LOGIN</h1>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
               
                <div className='container'>
                    <form onSubmit={handelsubmit}>
                        <div className='form'>
                            
                            <div className='row mt-5 justify-content-center '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Email/username:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='email' name='email' id='email' classname='box form-control' />
                                </div>
                                                              
                            </div>
                            <div className='row mt-5 justify-content-center '>
            
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Password:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='password' name='password' id='password' classname='box form-control' />
                                </div>
                               
                            </div>
                           
                            <div className='row mt-5'>
                                <div className='col-lg-5'></div>
                                <div className='col-lg-2'>
                               
                                    <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Login</button>
                                </div>
                                <div className='col-lg-5'></div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}