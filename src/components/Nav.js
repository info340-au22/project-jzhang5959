import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAuth, signOut } from 'firebase/auth';


export function NavHead(props) {
    const currentUser = props.currentUser;

    const navArray = [{name:'HOME', url:'/'}, 
    {name:'MOOD LOG', url:'/mood-display'}, 
    {name:'MUSIC', url:'/music'}, 
    {name:'PROFILE', url:'/profile'}];

    const navbar = navArray.map((elem) => {
        return (
            <li className="nav-item" key={elem.name}> 
                <Nav.Link className="nav-link"  href={elem.url}>{elem.name}</Nav.Link> 
            </li>
        ); // no current effect
    });

    const handleSignOut = (event) => {
        signOut(getAuth());
    }
    
    return(
        <div>
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
                {currentUser ? (
                    <button className="primary-bt" onClick={handleSignOut}>Sign Out</button> )
                    : (
                    <button className="primary-bt" ><a href="/login" className="login">Login</a></button>
                    )}
                </div>
            </div>

            </Navbar>
        </div>
    );
}
