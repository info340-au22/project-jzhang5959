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
import InfoEdition from './InfoEdition';
import { BrowserRouter, Routes, Route, Redirect, Link} from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


export default function App() {
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [image, updateImage] = useState('img/female-1.png');
    const [gender, updateG] = useState("");
    const [sentence, setSent] = useState("");
    const [password, updateP] = useState("");

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

    function updateLogin(email2, password2) {
        updateName(email2);
        updateP(password2);
    }

    function newRegister(name3, email3, password3, gender3) {
        updateName(name3);
        updateEmail(email3);
        updateP(password3);
        updateG(gender3);
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser) {
                console.log("sign in as", firebaseUser.displayName);
                console.log(firebaseUser);

            }
            else {
                console.log("sign out");
            }
        });

    }, [])

    
    return (
        <div>
        <NavHead />
        
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mood" element={<Mood />} />
                    <Route path="/music" element={<Music />} />
                        <Route path="/music-play" element={<MusicPlay />} />
                    <Route path="/profile" element={<Profile Name={name} Email={email} Img={image} Gender={gender} bio={sentence} pas={password}/>} />
                    <Route path="/login" element={<Login update={updateLogin} />} />
                        <Route path="/register" element={<Registration newR={newRegister}/>} />
                        <Route path="/info-edition" element={<InfoEdition edit={editProfile}/>} />
                    <Route path="/graph" element={<Graph />} />
                </Routes>
        </BrowserRouter>
        
        <Footer />     
        </div>
    );
}