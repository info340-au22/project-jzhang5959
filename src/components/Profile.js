import React, { useState } from 'react';
import {Footer} from './Footer';
import {Link } from 'react-router-dom';
import EditPhoto from './EditPhoto.js';

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
            <div className="profile-header">
            <h1>Profile</h1>
            </div>
        </header> 

        <div className="profile">
            <section className="basic-info">
                <h2>{name}</h2>

                <div className="container" id="front">
                    <EditPhoto />
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
            </section>

            <section className="mood-daily">
                <h2>Past Mood Diary</h2>

                <div className="container" id="front">
                    {moodLog}
                </div>

                <button type="view" value="view-all"><a href="/mood-diary">View All</a></button>
            </section>

            <section className="recent-music">
                <h2>Most Recent Listened Music</h2>

                <div className="container" id="front">
                    <img src="img/recent-music.png" alt="album's photo"/>
                    <p>BLACKPINK-STAY</p>
                    <button type="music" value="play-music"><a href="/play">Play Now ~</a></button>
                </div>
            </section>

        </div>

    </div>
    
    );
}