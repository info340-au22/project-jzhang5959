import React, { useState, useEffect } from 'react';
import {Link, Navigate } from 'react-router-dom';
import {StyledFirebaseAuth} from 'react-firebaseui';
import {getAuth, EmailAuthProvider, GoogleAuthProvider, setPersistence, signInWithEmailAndPassword, browserSessionPersistence} from 'firebase/auth';
import {ref,push,child,update,getDatabase,onValue} from "firebase/database";


export default function Login(props) {
    const [email, updateEmail] = useState("");
    const [name, updateName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const auth = getAuth();
    const update = props.update;
    const currentUser = props.currentUser;

    if(currentUser.userName) { //if signed in
      return <Navigate to="/register" />
    } 

    const configObj = {
      signInOptions: [
        {
          provider: EmailAuthProvider.PROVIDER_ID,
          requireDisplayedName: true,
        },
        {
          provider: GoogleAuthProvider.PROVIDER_ID
        }
      ],
      signInFlow: 'popup',
      callbacks: {
        signInSuccessWithAuthResult: () => false
      },
      credentialHelper: "none"
    }
    
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

        <main className="login-profile">
            <form id="login">
              
                {/*<div className="container">
                    <label key="email" id="label-email" onChange={emailChange}>Email</label>
                    <input type="email"
                        id="email"
                        placeholder="Enter Your Email" 
                        value={email} 
                        onChange={emailChange}/>
                    {submitted && !email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>

                <div className="container">
                    <label key="password" id="label-password" onChange={pwChange}>Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={pwChange}/>
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                  </div>

                <div className="container">
                    <button id="Login" type="login" value="login" onClick={handleSubmit}><Link to='/profile'>
                    Login
                    </Link></button>
                </div>*/}
                
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={configObj}/>
            </form>
        </main>

        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

    </div>

    )
}