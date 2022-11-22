import React from 'react';
import Home from './home.js';
import Profile from './Profile.js';
import Login from './Login.js';
import Register from './Register.js';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import {MainMusicSection} from './music';


export default function App() {
    return (
        <div>
        <NavHead />
        
        {/*<Home />*/}
        {/*<MoodMusicSection />*/}
        <MainMusicSection />
        {/*<Profile />*/}
        {/*<Login />*/}
        {/*<Register />*/}

        <Footer />
        </div>
    );
}