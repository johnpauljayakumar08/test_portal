import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from "../micro-logo.png";
import { Link } from 'react-router-dom';
import './commuicationresult.css'



export default function Katresult() {

    return (
        <>
            <div className='container-fluid'>
                <h1 className='text-center p-5'>KAT Result</h1>

                <table className='container-fluid'>
                    <tr>
                        <th rowspan="3">S.No</th>
                        <th rowspan="3">Name</th>
                        <th colspan="7" className='text-center'>Score</th>
                        <th rowSpan="3" className='text-center'>Action</th>
                    </tr>
                    <tr>
                        <th colspan="3" className='text-center'>Numerical ability</th>
                        <th colspan="3" className='text-center'>Verbal ability</th>
                        <th rowSpan="2">Communication</th>
                    </tr>
                    <tr>
                        <th>Basic</th>
                        <th>Intermediate</th>
                        <th>Advance</th>
                        <th>Basic</th>
                        <th>Intermediate</th>
                        <th>Advance</th>
                       
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>Sam</td>
                        <td>100</td>
                        <td>100</td>
                        <td>0</td>
                        <td>100</td>
                        <td>100</td>
                        <td>50</td>
                        <td>
                            <select  id="communication">
                                <option value="" className='text-center'>Select the option</option>
                                <option value="">Trainable</option>
                                <option value="">Non-Trainable</option> 
                                <option value="">Interviewable</option>
                            </select>
                        </td>
                        <td><button className='btn btn-success'>Submit</button></td>
                    </tr>
                </table>
            </div>
        </>
    );
}