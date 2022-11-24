import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home.js';
import Profile from './Profile.js';
import Mood from './Mood.js';
import Music from './music.js';
import Register from './Register.js';
import Login from './Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function NavHead(props) {
    const navArray = [{name:'HOME', url:'/'}, 
    {name:'MOOD LOG', url:'/mood'}, 
    {name:'MUSIC', url:'/music'}, 
    {name:'PROFILE', url:'/profile'}];

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
                    <ul className="navbar-nav">
                        {navbar}
                    </ul>
                    </Nav>
                </Navbar.Collapse>
                <div className="sign-register">
                    <a href="/login" className="login">Login</a>
                    <button className="primary-bt"><a className="register" href="/register">Register</a></button>
                </div>
            </div>
            </Navbar>
            
        </div>
    );
}
