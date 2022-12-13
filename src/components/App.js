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
import { ref, getDatabase, onValue} from "firebase/database";
import MusicPlayPage from './music/MusicPlayList';
import {getAuth, onAuthStateChanged} from 'firebase/auth';



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
                console.log(currentUser);
            }
            else {
                console.log("sign out");
                setCurrentUser('');
            }
        });

    }, [])

    const [moodsList, setMoodsList] = useState(()=>[]);

    const db = getDatabase();
    const allMessageRef = ref(db,'MoodLogs');

    const offFunction = onValue(allMessageRef, (snapshot) => {
        const valueObj = snapshot.val();
        //convert object into array
        const objKeys = Object.keys(valueObj);
        const objArray = objKeys.map((keyString) => {
            const theMoodObj = valueObj[keyString];
            theMoodObj.key = keyString;
            return theMoodObj;
        })
    //   console.log(Array.isArray(objArray));
        if (Math.random() > 0.3) {
            setMoodsList(objArray);
        }
    })

    const sortedMoodsList = moodsList
    .filter((moodObj) => {
       return moodObj.userEmail === currentUser.email;
    })
    .sort((a,b) => b.date - a.date);

    // music
    const [musicMood,setMusicMood] = useState("joyful");
    

    
    function ProtectedPage(props) {
        //...determine if user is logged in
        if(props.currentUser.userName === '') { //if no user, send to sign in
          return <Navigate to="/login" />
        }
        else { //otherwise, show the child route content
          return <Outlet />
        }
    }

    //console.log(moodsList);


    return (
        <div>
        <NavHead currentUser={currentUser}/>
        
        <BrowserRouter>
                <Routes>

                    <Route path="/denied" element={<Protected currentUser={currentUser}/>} />
                    <Route path="/login" element={<Login currentUser={currentUser}/>} />
                    <Route path="/register" element={<Registration newR={newRegister} currentUser={currentUser}/>} />
                    <Route element={<ProtectedPage currentUser={currentUser}/>}>
                        <Route path="/" element={<Home mood={musicMood}/>} />
                        <Route path="/mood-display" element={<MoodDisplay currentUser={currentUser} moodsList={moodsList}/>} />
                        <Route path="/mood" element={<Mood />} />
                        <Route path="/music" element={<MusicPage mood={musicMood} moodsList={sortedMoodsList}/>} />
                        <Route path="/music/:musicType" element={<MusicPlayPage />} />
                        <Route path="/profile" element={<Profile Name={name} Img={image} Gender={gender} bio={sentence} age={age} currentUser={currentUser}/>} />
                        
                        <Route path="/info-edition" element={<InfoEdition edit={editProfile}/>} />
                        <Route path="/info-edition" element={<InfoEdition edit={editProfile} currentUser={currentUser}/>} />
                    </Route>
                </Routes>
        </BrowserRouter>
        <Footer />     
        </div>
    );
}