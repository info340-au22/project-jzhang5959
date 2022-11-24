import React, { useState } from 'react';
import {Link } from 'react-router-dom';


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
          saveStateToLocalStorage();
          
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
    
    const state = [{email: {email}, password: {password}}];

    const saveStateToLocalStorage = () => { 
          localStorage.setItem('state', JSON.stringify({state})); 
        };
    
    {/*const getStateFromLocalStorage = () => { 
            let data = localStorage.getItem('state');  
            const initialValue = JSON.parse(data);
            return initialValue;
        };*/}

    return (
        <div className="container-fluid">
        <header>
            <h1>Log Into Your Account</h1>
        </header>

        <main className="login-profile">
            <form id="login">
                <div className="container">
                    <label key="email" id="label-email" onChange={emailChange}>Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter Your Email" 
                        value={email} 
                        onChange={emailChange}/>
                </div>

                <div className="container">
                    <label key="password" id="label-password" onChange={pwChange}>Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={pwChange}/>
                </div>

                <div className="container">
                    <button id="Login" type="login" value="login" onClick={handleSubmit}><Link to='/profile'>Login</Link></button>
                </div>
            </form>
        </main>

        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

    </div>

    )
}