import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import Home from './home';
import mainProfile from './Profile';


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