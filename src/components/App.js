import React, { useState, useEffect } from 'react';
import Home from './home';
import Profile from './Profile';
import Login from './Login';
import Registration from './Registration';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import Music from './music';
import MusicPlay from './music-play';
import Mood from './Mood';
import Graph from './Graph';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


export default function App() {
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updateP] = useState("");

    function updateData(emails) {
        updateEmail(emails);
    }



    
    return (
        <div>
        <NavHead />
        
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mood" element={<Mood />} />
                    <Route path="/music" element={<Music />} />
                        <Route path="/music-play" element={<MusicPlay />} />
                    <Route path="/profile" element={<Profile upEmail={email}/>} />
                    <Route path="/login" element={<Login update={updateData}/>} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/graph" element={<Graph />} />
                </Routes>
        </BrowserRouter>
        
        <Footer />     
        </div>
    );
}