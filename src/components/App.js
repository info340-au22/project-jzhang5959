import React from 'react';
import Home from './home';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import Music from './music';
import Mood from './Mood';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


export default function App() {
    
    return (
        <div>
        <NavHead />
        
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mood" element={<Mood />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
        </BrowserRouter>
        

        <Footer />  
        </div>
    );
}