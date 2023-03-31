import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from "./micro-logo.png";
import './add.css';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


import axios from 'axios';
export default function Login() { 
    
    function phone(){
        var phoneno = document.getElementById("phoneNo").value;
        var patten = /^\d{10}$/;
         if(phoneno.match(patten)){
            alert("enter the valid number")
        }

    }

    const handelsubmit = async (event) => {
    event.preventDefault();
  
    var value = { headers: {'Content-Type': 'application/json' } };
    
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneno = document.getElementById("phoneNo").value;
    var counsellorname = document.getElementById("counsellorName").value;
    var aboutinstitute = document.getElementById("aboutInstitute").value;
    var nativecity = document.getElementById("nativeCity").value;
    var recidencecity = document.getElementById("residenceCity").value;
    var degree = document.getElementById("degree").value;
    var employeeStatus = document.getElementById("employeeStatus").value;
    function phone(){
        var phoneno = document.getElementById("phoneNo").value;
        var patten = /^\d{10}$/;
         if(phoneno.match(patten)){
            alert("enter the valid number")
        }

    }
    
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
    else if (degree === '' || degree === null) {
        alert("Enter your degree");
    }
    else if (employeeStatus === '' || employeeStatus === null) {
        alert("Enter your employeeStatus");
    }
    else {
       await  axios.post("http://192.168.253.177:8080/kgm/user/insert", {"firstName":firstname,"lastName":lastname,"email":email,"phoneNo":phoneno,"counsellorName":counsellorname,"aboutInstitute":aboutinstitute,"nativeCity":nativecity,"residenceCity":recidencecity,"degree":degree,"employeeStatus":employeeStatus})
                .then(function (res) {
                    if (res.data.responseMsg === 'error') {
                        alert("Error");
                        window.location.reload();
                    }
                    else if (res.data.responseMsg === 'success') {
                        alert('Data inserted');
                        const user_registration_details_id = localStorage.getItem('user_registration_details_id');
                        window.location.href = `/questions/${user_registration_details_id}`;
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
                        <h1>KGM Admission Test</h1>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                {/* <div className='container'>
                <form onSubmit={handelsubmit}>
                    <div className='form'>
                        <div className='row mt-5 '>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-3 text-center'>
                                <h5>Candidate-Name:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='text' name='candidatename' id='candidatename'  classname='box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Phone-No:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='text' name='phoneno' id='phoneno'  classname=' box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row mt-3 '>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-2 text-center'>
                                <h5>Email:</h5>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <input type='email' name='email' id='email'  classname=' box form-control' />
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2 mt-5 '>
                                <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Submit</button>
                            </div>
                            <div className='col-lg-5'></div>
                        </div>
                    </div>
                </form>
                </div> */}
                <div className='container'>
                    <form onSubmit={handelsubmit}>
                        <div className='form'>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>First Name:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='firstName' id='firstName' classname='box form-control'    />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Last Name:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='lastName' id='lastName' classname='box form-control'   />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Email:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='email' name='email' id='email' classname='box form-control'   />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Phone No:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='phoneNo' id='phoneNo' classname='box form-control' onChange={phone}   />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Counsellor Name:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                <select name="counsellorName" id="counsellorName"  >
                                <option value="">Select the Counsellor</option>
                                    <option value="CHERIN SANGEETHA">CHERIN SANGEETHA</option>
                                    <option value="RISHIVARMAN">RISHIVARMAN</option>
                                    <option value="SURESHKUMAR">SURESHKUMAR</option>
                                    <option value="BALACHANDAR">BALACHANDAR</option>
                                    <option value="KARTHEESWARAN">KARTHEESWARAN</option>
                                    <option value="GANESHPRASATH">GANESHPRASATH</option>
                                    <option value="A.K.ARAVIND">A.K.ARAVIND</option>
                                    <option value="MOHAMED MUSTHAFA">MOHAMED MUSTHAFA</option>
                                    <option value="NOORUL AMEEN">NOORUL AMEEN</option>
                                    <option value="EBENEZER HOUSMAN">EBENEZER HOUSMAN</option>
                                    <option value="SWATHIKA">SWATHIKA</option>
                                    <option value="SAMUEL PONNURAJ">SAMUEL PONNURAJ</option>
                                    <option value="SURIYAPRIYA">SURIYAPRIYA</option>
                                    <option value="KALAIVANI S">KALAIVANI S</option>
                                    <option value="SRIVARSHINIPRIYA">SRIVARSHINIPRIYA</option>
                                    <option value="SRIDHAR S">SRIDHAR S</option>
                                    <option value="JOTHIKA">JOTHIKA</option>
                                    <option value="GOMATHI">GOMATHI</option>
                                    <option value="KAAVIYA SREE">KAAVIYA SREE</option>
                                    <option value="DIVYA J">DIVYA J</option>
                                    <option value="HARIHARAN M">HARIHARAN M</option>
                                    <option value="KEERTHANA K">KEERTHANA K</option>
                                    <option value="SUKUMAR M">SUKUMAR M</option>
                                    <option value="SIVA RANJITH G">SIVA RANJITH G</option>
                                    <option value="HARIHARAN R">HARIHARAN R</option>
                                    <option value="ABINESH S">ABINESH S</option>
                                    <option value="ANITHA M">ANITHA M</option>
                                    <option value="PRADHAP MANOHARAN">PRADHAP MANOHARAN</option>
                                    <option value="SANJEEV R">SANJEEV R</option>
                                </select>
                                    {/* <input type='text' name='counsellorname' id='counsellorname' classname='box form-control' /> */}
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>About Institute:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='aboutInstitute' id='aboutInstitute' classname='box form-control'   />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Native City:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='nativeCity' id='nativeCity' classname='box form-control'   />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Residence City:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='residenceCity' id='residenceCity' classname='box form-control'   />
                                </div>
                            </div>
                            <div className='row mt-5 '>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Degree:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <input type='text' name='degree' id='degree' classname='box form-control'   />
                                </div>
                                <div className='col-lg-2 mt-2 text-center'>
                                    <h5>Employe Status:</h5>
                                </div>
                                <div className='col-lg-4 text-center'>
                                    <select name="employeeStatus" id="employeeStatus"  >
                                        <option value="">Select the option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-lg-5'></div>
                                <div className='col-lg-2'>
                                
                                    <button type="submit" className='col-lg-12 btn btn-primary' value='submit' name='submit'>Submit</button>
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