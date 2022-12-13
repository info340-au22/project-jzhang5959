import React, { useState, useEffect } from 'react';
import Home from './home';
import Profile from './Profile';
import Login from './Login';
import Registration from './Registration';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import Mood from './Mood';
import MoodDisplay from './MoodDisplay';
import Protected from './Protected';
import InfoEdition from './InfoEdition';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate} from 'react-router-dom';
import MusicPage from './music/MusicPage';
import MusicPlayPage from './music/MusicPlayList';
import {getAuth, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence, browserSessionPersistence} from 'firebase/auth';



export default function App() {
    const [name, updateName] = useState('');
    const [image, updateImage] = useState('img/female-1.png');
    const [gender, updateG] = useState('');
    const [sentence, setSent] = useState('');
    const [age, setAge] = useState();
    const [currentUser, setCurrentUser] = useState('');

    //function updateData(emails) {
        //updateEmail(emails);
    //}

    function editProfile(name1, image1, gender1, sentence1) {
        updateName(name1);
        updateImage(image1);
        updateG(gender1);
        setSent(sentence1);
    }

    function updateLogin(email2, name2) {
        updateName(email2);
        updateName(name2);
    }

    function newRegister(name3, gender3, sentence3, age3) {
        updateName(name3);
        updateG(gender3);
        setSent(sentence3);
        setAge(age3);
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if(firebaseUser) {
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.userEmail = firebaseUser.email;
                setCurrentUser(firebaseUser);
                console.log("sign in as", firebaseUser.displayName);
                console.log(firebaseUser);
            }
            else {
                console.log("sign out");
                setCurrentUser('');
            }
        });

    }, [])
    
    // music
    const [musicMood,setMusicMood] = useState("joyful");
    
    function changeMood(newMood) {
        setMusicMood(newMood);
    }

    function ProtectedPage(props) {
        //...determine if user is logged in
        if(props.currentUser.userId === '') { //if no user, send to sign in
          return <Navigate to="/login" />
        }
        else { //otherwise, show the child route content
          return <Outlet />
        }
    }


    return (
        <div>
        <NavHead currentUser={currentUser}/>
        
        <BrowserRouter>
                <Routes>

                    <Route path="/denied" element={<Protected currentUser={currentUser}/>} />
                    <Route path="/login" element={<Login update={updateLogin} currentUser={currentUser}/>} />
                    <Route path="/register" element={<Registration newR={newRegister} currentUser={currentUser}/>} />
                    <Route element={<ProtectedPage currentUser={currentUser}/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/mood-display" element={<MoodDisplay currentUser={currentUser}/>} />
                        {/* redirect to general channel */}
                        <Route path="/mood" element={<Mood changeMoodCallBack = {changeMood} currentUser={currentUser}/>} />
                        <Route path="/music" element={<MusicPage mood={musicMood} currentUser={currentUser}/>} />
                        <Route path="/music/:musicType" element={<MusicPlayPage currentUser={currentUser}/>} />
                        <Route path="/profile" element={<Profile Name={name} Img={image} Gender={gender} bio={sentence} age={age} currentUser={currentUser}/>} />
                        
                        <Route path="/info-edition" element={<InfoEdition edit={editProfile} currentUser={currentUser}/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
        <Footer />     
        </div>
    );
}