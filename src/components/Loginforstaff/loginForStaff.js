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
        var key = new FormData(event.target);
        var value = { headers: { "enctype": "multipart/form-data" } };


        var firstname = document.getElementById("candidatename").value;
        var lastname = document.getElementById("phoneno").value;
        var email = document.getElementById("email").value;
        var phoneno = document.getElementById("email").value;
        var counsellorname = document.getElementById("email").value;
        var aboutinstitute = document.getElementById("email").value;
        var nativecity = document.getElementById("email").value;
        var recidencecity = document.getElementById("email").value;


        if (firstname === '' || firstname === null) {
            alert("Enter your First Name");
        }
        else if (lastname === '' || lastname === null) {
            alert(" Enter your Last Name");
        }
        else if (email === '' || email === null) {
            alert("Enter your email");
        }
        else if (phoneno === '' || phoneno === null) {
            alert("Enter your phoneno");
        }
        else if (counsellorname === '' || counsellorname === null) {
            alert("Enter your counsellorname");
        }
        else if (aboutinstitute === '' || aboutinstitute === null) {
            alert("Enter your aboutinstitute");
        }
        else if (nativecity === '' || nativecity === null) {
            alert("Enter your nativecity");
        }
        else if (recidencecity === '' || recidencecity === null) {
            alert("Enter your recidencecity");
        }
        else {
            await axios.post('http://localhost:3002/add', key, value)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('error');
                        window.location.reload();
                    }
                    else if (res.data.status === 'Success') {
                        alert("Inserted");
                        window.location.href = "./otp";

                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
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
                                <Link to="/result">
                                    <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Login</button></Link>
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