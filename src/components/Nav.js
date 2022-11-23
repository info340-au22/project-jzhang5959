import React from 'react';
import Home from './home.js';
import Profile from './Profile.js';
import { Link, NavLink } from 'react-router-dom';

export function NavHead(props) {
    const navArray = [{name:'HOME', url:'/'}, 
    {name:'MOOD LOG', url:'/mood-log'}, 
    {name:'MUSIC', url:'/music'}, 
    {name:'PROFILE', url:'/profile'}
];

const navbar = navArray.map((elem) => {
    return (
        <li className="nav-item" key={elem.name}> 
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
                    <button className="primary-bt" > Register</button>
                </div>
            </div>
        </div>
    </nav>
    );
}