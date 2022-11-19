import React from 'react';

const navArray = ['HOME', 'MOOD LOG', 'MUSIC', 'PROFILE'];
export function Nav(props) {
    const navbar = navArray.map((elem) => {
        return (
            <li className="nav-item"> 
                <a className="nav-link"  href="#/">{elem}</a> 
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
                <ul className="navbar-nav me-auto">
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