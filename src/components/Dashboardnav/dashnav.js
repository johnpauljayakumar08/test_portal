import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './micro-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faDiagramProject, faHome, faImage, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link as Scroll } from "react-scroll";
import  {Link} from 'react-router-dom'


export function Dashnav(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light posi">
                <a class="navbar-brand col-lg-2 col-4"  >
                    <img src={logo} className="col-lg-12"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link to='/communicationstaff'><a class="nav-link">Test Completed Student</a></Link>
                    </li>
                    <li class="nav-item active">
                    <Link to='/aggrid'><a class="nav-link">Completed Student</a></Link>
                    </li>
                    
                    </ul>
    
                </div>
            </nav>
        </>
    );
}