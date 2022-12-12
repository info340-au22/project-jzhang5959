import React, { useState, useEffect } from 'react';
import Home from './home';
import Profile from './Profile';
import Login from './Login';
import Registration from './Registration';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import Mood from './Mood';
import Graph from './Graph';
import InfoEdition from './InfoEdition';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MusicPage from './music/MusicPage';
import MusicPlayList from './music/MusicPlayList';


export default function App() {
    // profile
    const [name, updateName] = useState("Bella");
    const [email, updateEmail] = useState("gehuijun@uw.edu");
    const [image, updateImage] = useState('img/female-1.png');
    const [gender, updateG] = useState("girl");
    const [sentence, setSent] = useState("Enjoy my life");

    //function updateData(emails) {
        //updateEmail(emails);
    //}

    function editProfile(name1, email1, image1, gender1, sentence1) {
        updateName(name1);
        updateEmail(email1);
        updateImage(image1);
        updateG(gender1);
        setSent(sentence1);
    }


    // music
    const [musictype,setMusictype] = useState("rock");

    return (
        <div>
        <NavHead />
        
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mood" element={<Mood />} />
                    <Route path="/music" element={<MusicPage />} >
                        <Route path=":musicType" element={<MusicPlayList />} />
                    </Route>
                    <Route path="/profile" element={<Profile Name={name} Email={email} Img={image} Gender={gender} bio={sentence}/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                        <Route path="/info-edition" element={<InfoEdition edit={editProfile}/>} />
                    <Route path="/graph" element={<Graph />} />
                </Routes>
        </BrowserRouter>
        <Footer />     
        </div>
    );
}