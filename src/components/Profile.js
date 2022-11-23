import React, { useState } from 'react';
import {Footer} from './Footer';

const exampleMood = [{date:"2022-07-04" , mood:"Happy day", icon:"dot joyful"},
                    {date:"2022-07-03" , mood:"Sad", icon:"dot miserable"},
                    {date:"2022-07-03" , mood:"Boring day and stay home", icon:"dot bored"}];

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
    <div className="container-fluid">
        <header>
            <div className="container dash-border-light-bg">
                <h1 className='primary-dark-color'>YOUR PROFILE</h1>
            </div>
        </header> 

        <div id="profile">
            <div id="basic-info">
                <h2 className='primary-dark-color'>User Information</h2>

                <div className="container row" id="front">
                    <div className='col'>
                        <img className="profile-photo" src={image} alt="profile photo"/>
                    
                        <a href="https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
                            target="_blank" rel="noopener noreferrer" 
                            title="Download free do whatever you want high-resolution photos from Michael Dam">
                            <title></title>
                            <span><p>Taken by Michael Dam</p></span>
                        </a>

                        <div className="container d-flex justify-content-center">
                            <button className="primary-bt" type="edit" value="edit-photo" onClick={imageChange}>
                                <a href="/update-photo">Edit your photo</a>
                            </button>
                        </div>
                    </div>

                    <div className="col user-info">
                        <h3>User Name:{name}</h3>
                        <h3> 
                            Gender: <span className="material-icons md-48" aria-label="gender">{gender}</span>
                        </h3>

                        <h3>
                            Status: <span className="material-icons md-48" aria-label="status">{status}</span>
                        </h3>
                        
                        <h3>{sentence}</h3>
                    </div>
                   
                </div>
            </div>

            <div id="mood-daily">
                <h2 className='primary-dark-color'>Past Mood Diary</h2>

                <div className="container" id="front">
                    {moodLog}
                </div>

                <div className="container d-flex justify-content-center">
                    <button className="primary-bt" type="view" value="view-all"><a href="/mood-diary">View All</a></button>
                </div>
            </div>

            <div id="recent-music">
                <h2 className='primary-dark-color'>Most Recent Listened Music</h2>

                <div className="container" id="front">
                    <img src="img/recent-music.png" alt="album's photo"/>
                    <p>BLACKPINK-STAY</p>
                    <div className="container d-flex justify-content-center">
                        <button className="primary-bt" type="music" value="play-music"><a href="/play">Play Now ~</a></button>
                    </div>
                    
                </div>
            </div>

        </div>

       {Footer};
    </div>
    
    );
}