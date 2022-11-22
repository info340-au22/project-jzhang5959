import React from 'react';
import {Footer} from './Footer';


export default function Login() {
    return (
        <div className="container-fluid">
        <header>
            <h1>Log Into Your Account</h1>
        </header>

        <main id="login-profile">
            <form id="login">
                <div className="container">
                    <label key="email" id="label-email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter Your Email" />
                </div>

                <div className="container">
                    <label key="password" id="label-password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password" />
                </div>

                <div className="container">
                    <button onClick="document.location='profile.html'" type="login" value="login">Login</button>
                </div>
            </form>
        </main>

        {Footer};
    </div>

    )
}