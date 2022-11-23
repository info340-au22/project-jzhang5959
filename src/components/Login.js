import React, { useState } from 'react';
import {Footer} from './Footer.js';
import Profile from './Profile.js'


export default function Login() {
    const [email, updateEmail] = useState("");
    const [password, updateP] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const emailChange = (event) => {
        const email = event.target.value;
        updateEmail(email);
        setSubmitted(false);
      }

    const pwChange = (event) => {
        const password = event.target.value;
        updateP(password);
        setSubmitted(false);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };
    
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {email} successfully login!!</h1>
          </div>
        );
      };

      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };

    return (
        <div className="container-fluid">
        <header>
            <h1>Log Into Your Account</h1>
        </header>

        <main id="login-profile">
            <form id="login">
                <div className="container">
                    <label key="email" id="label-email" onChange={emailChange}>Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter Your Email" />
                </div>

                <div className="container">
                    <label key="password" id="label-password" onChange={pwChange}>Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password" />
                </div>

                <div className="container">
                    <button onClick={handleSubmit} type="login" value="login">Login</button>
                </div>
            </form>
        </main>

        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

        <Footer />
    </div>

    )
}