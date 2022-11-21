import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const navArray = [{name:'HOME', url:'/'}, 
{name:'MOOD LOG', url:'/mood-log'}, 
{name:'MUSIC', url:'/music'}, 
{name:'PROFILE', url:'/profile'}];

export function NavHead(props) {
    const navbar = navArray.map((elem) => {
        return (
            <li className="nav-item"> 
                <a className="nav-link"  href={elem.url}>{elem.name}</a> 
            </li>
        ); // no current effect
    })
    return(
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

                <div className="sign-register">
                    <a href="login.html" className="login">Login</a>
                    <button className="primary-bt" onclick="document.location='create-profile.html'">Register</button>
                </div>
            </div>
        </div>
    </nav>
    );
}