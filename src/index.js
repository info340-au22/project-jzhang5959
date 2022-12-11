import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo3EqLyFfT0-EyBtjFwHAIxGQ6U6KgKQY",
    authDomain: "moody-340.firebaseapp.com",
    projectId: "moody-340",
    storageBucket: "moody-340.appspot.com",
    messagingSenderId: "593170267630",
    appId: "1:593170267630:web:c622923c750e0a1b4d62ff"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <App /> 
    </React.StrictMode>
);
