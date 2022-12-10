import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import PhotoEdition from './PhotoEdition.js';

const exampleMood = [{date:"2022-07-04" , mood:"Happy day", icon:"dot joyful"},
                    {date:"2022-07-03" , mood:"Sad", icon:"dot miserable"},
                    {date:"2022-07-03" , mood:"Boring day and stay home", icon:"dot bored"}];

export default function Profile(props) {
    const [name, updateName] = useState("Bella");
    const [email, updateEmail] = useState("gehuijun@uw.edu");
    const [status, setStatus] = useState("");
    const [gender, updateG] = useState("girl");
    const [sentence, setSent] = useState("Enjoy my life");
    
    const moodLog = exampleMood.map((elem) => {
        return (
            <dl>
                <dt>{elem.date}</dt>
                <dd>
                    <p>{elem.mood}</p>
                    <span className={elem.icon}></span>
                </dd>
            </dl>
        )
    });

    return (
    <div className="container-profile">
        <header>
            <div className="container dash-border-light-bg">
                <h1 className='primary-dark-color'>YOUR PROFILE</h1>
            </div>
        </header> 

        <div className="profile">
            <div className="basic-info">
                <h2 className='primary-dark-color'>User Information</h2>

                <div className="container" id="front">
                    <PhotoEdition />
                    <p>
                    User Name: {name}
                    </p>
                    <p> 
                    Email: {email}
                    </p>
                    <p>
                    Gender: 
                    <span className="material-icons md-48" aria-label="gender">{gender}</span>
                    Status: 
                    <span className="material-icons md-48" aria-label="status">{status}</span>
                    </p>
                    <p>{sentence}</p>
                </div>
            </div>

            <div className='mood-daily'>
                <h2 className='primary-dark-color'>Past Mood Diary</h2>
                <div className="container" id="front">
                    {moodLog}
                </div>

                <div className="container d-flex justify-content-center">
                    <button className="primary-bt" type="view" value="view-all"><a href="/mood-vis.html">View All</a></button>
                </div>
            </div>

            <div className="recent-music">
                <h2 className='primary-dark-color'>Most Recent Listened Music</h2>
                <div className="container" id="front">
                    <img src="img/recent-music.png" alt="album's photo"/>
                    <p>BLACKPINK-STAY</p>
                    <div className="container d-flex justify-content-center">
                        <button className="primary-bt" type="music" value="play-music"><Link to="/music">Play Now ~</Link></button>
                    </div>
                    
                </div>
            </div>

        </div>

    </div>
    
    );
}