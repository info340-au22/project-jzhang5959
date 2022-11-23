import React from 'react';
import Home from './home.js';
import Profile from './Profile.js';
import Mood from './Mood.js';
import Music from './music.js';
import Register from './Register.js';
import Login from './Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function NavHead(props) {
    const navArray = [{name:'HOME', url:'http://localhost:3000/'}, 
    {name:'MOOD LOG', url:'http://localhost:/mood'}, 
    {name:'MUSIC', url:'http://localhost:3000/music'}, 
    {name:'PROFILE', url:'http://localhost:3000/profile'}];

    const navbar = navArray.map((elem) => {
        return (
            <li className="nav-item" key={elem.name}> 
                <a className="nav-link"  href={elem.url}>{elem.name}</a> 
            </li>
        ); // no current effect
    });

    return(
        <div>
        
        <nav className="navbar navbar-expand-lg">
            
            <div className="container-fluid p-3">
                <p className="navbar-brand">Moody</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle navigation">
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
            
        </nav>
            
        </div>
    );
}
