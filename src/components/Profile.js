import React, { useState } from 'react';
import {Footer} from './Footer';


export default function Profile(props) {
    const [name, updateName] = useState("Bella");
    const [email, updateEmail] = useState("");
    const [status, setStatus] = useState("");
    const [gender, updateG] = useState("girl");
    const [sentence, setSent] = useState("Enjoy my life");
    const [image, updateImage] = useState('img/profile-photo.jpg');

    const imageChange = (event) => {
        const image = event.target.value;
        updateImage(image);
      }
    return (
    <div className="container-fluid">
        <header>
            <div className="profile-header">
            <h1>Profile</h1>
            </div>
        </header> 

        <div id="profile">
            <section id="basic-info">
                <h2>{name}</h2>

                <div className="container" id="front">
                    <img src={image} alt="profile photo"/>
                    <a href="https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
                        target="_blank" rel="noopener noreferrer" 
                        title="Download free do whatever you want high-resolution photos from Michael Dam">
                        <title></title>
                        <span><p>Taken by Michael Dam</p></span>
                        </a>
                    <button type="edit" value="edit-photo" onClick={imageChange}><a href="/update-photo">Edit your photo</a></button>
                    <p> Gender: 
                    <span className="material-icons md-48" aria-label="gender">{gender}</span>
                    Status: 
                    <span className="material-icons md-48" aria-label="status">{status}</span>
                    </p>
                    <p>{sentence}</p>
                </div>
            </section>

            <section id="mood-daily">
                <h2>Past Mood Diary</h2>

                <div className="container" id="front">
                    <dl>
                        <dt>2022-07-04</dt>
                        <dd>
                            <p>Happy day</p>
                            <span className="dot joyful"></span>
                        </dd>
                    </dl>

                    <dl>
                        <dt>2022-07-03</dt>
                        <dd>
                            <p>Sad</p>
                            <span className="dot miserable"></span>
                        </dd>
                    </dl>

                    <dl>
                        <dt>2022-07-03</dt>
                        <dd>
                            <p>Boring day and stay home</p>
                            <span className="dot bored"></span>
                        </dd>
                    </dl>
                </div>

                <button type="view" value="view-all"><a href="/mood-diary">View All</a></button>
            </section>

            <section id="recent-music">
                <h2>Most Recent Listened Music</h2>

                <div className="container" id="front">
                    <img src="img/recent-music.png" alt="album's photo"/>
                    <p>BLACKPINK-STAY</p>
                    <button type="music" value="play-music"><a href="/play">Play Now ~</a></button>
                </div>
            </section>

        </div>

       {Footer};
    </div>
    
    );
}