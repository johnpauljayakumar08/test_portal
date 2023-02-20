import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './micro-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faDiagramProject, faHome, faImage, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link as Scroll } from "react-scroll";


export function Dashnav(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light posi">
                <a class="navbar-brand col-lg-2 col-4"  >
                    <img src={logo} className="col-lg-12"/>
                </a>
                <div className="align-items-end" >

                    <p ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>John Paul</p>
                </div>
            </nav>
        </>
    );
}