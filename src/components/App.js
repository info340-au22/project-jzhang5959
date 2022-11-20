import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {Nav} from './Nav.js';
import {Footer} from './Footer.js';
import {Home} from './home.js';
import {mainProfile} from './Profile.js';


export default function App() {
    return (
        <div className="container-fluid">

            <div>

            <main className="container">
            
            </main>
        
            <Footer/>
            </div>

        <Routes> {/* the collection of routes to match */}
            {/* if currentUrlPath === "home" */}
            <Route exact path="/" element={<Home />} /> |{" "}

            <Route path="profile" element={<mainProfile />} />
        </Routes>
        </div>
      );
}