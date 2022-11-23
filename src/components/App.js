import React from 'react';
import Home from './home';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import {MainMusicSection} from './music';


export default function App() {
    return (
        <div>
        <NavHead />
        <Home />
        {/*<Home />*/}
        {/*<MainMusicSection />*/}
        {/*<Profile />*/}
        {/*<Login />*/}
        {/*<Register />*/}

        <Footer />
        </div>
    );
}