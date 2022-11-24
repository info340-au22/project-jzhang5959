import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavHead(props) {
    const navArray = [{name:'HOME', url:'/'}, 
    {name:'MOOD LOG', url:'/mood'}, 
    {name:'MUSIC', url:'/music'}, 
    {name:'PROFILE', url:'/profile'}];
    const [tog, updateTog] = useState();

    const navbar = navArray.map((elem) => {
        return (
            <li className="nav-item" key={elem.name}> 
                <Nav.Link className="nav-link"  href={elem.url}>{elem.name}</Nav.Link> 
            </li>
        ); // no current effect
    });

    

    return(
        <div>
        
         {/* <nav className="navbar navbar-expand-lg">
            
            <div className="container-fluid p-3">
                <p className="navbar-brand">Moody</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav">
                        {navbar}
                    </ul>
                </div>

                <div className="sign-register">
                    <a href="http://localhost:3000/login" className="login">Login</a>
                    <button className="primary-bt"><a className="register" href="http://localhost:3000/register">Register</a></button>
                </div>
            </div>
            
        </nav> */}

<Navbar expand="md" className="navbar">
            <div className="container-fluid p-3">
                <Navbar.Brand href="/">Moody</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {navbar}
                    </Nav>
                </Navbar.Collapse>
                <div className="sign-register">
                    <a href="http://localhost:3000/login" className="login">Login</a>
                    <button className="primary-bt"><a className="register" href="http://localhost:3000/register">Register</a></button>
                </div>
            </div>
            </Navbar>
            
        </div>
    );
}
