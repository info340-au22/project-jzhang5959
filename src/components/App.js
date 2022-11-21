import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {Nav} from './Nav.js';
import {Footer} from './Footer.js';
import {Home} from './home.js';
import {mainProfile} from './Profile.js';



export default function App() {
    return (
        <div>
            
            <NavHead />

            <BrowserRouter>
                <Routes path="/" element={<NavHead />}> {/* the collection of routes to match */}
                    {/* if currentUrlPath === "home" */}
                    <Route index element={<Home />} />
                    <Route path="profile" element={<mainProfile />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}