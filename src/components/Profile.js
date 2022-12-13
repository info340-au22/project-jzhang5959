import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import RecommandMusic from "./music/RecommandMusic";

const url = 'https://source.unsplash.com/random/600x600';

export default function Profile(props) {
    const currentUser = props.currentUser;
    const displayName = props.currentUser.userName;
    const displayEmail = props.currentUser.userEmail;
    const storeName = props.Name;
    const storeGender = props.Gender;
    const storeBio = props.bio;
    const storeImg = props.Img;
    const storeAge = props.age;
    const mood = props.mood;


    useEffect(function() {
        fetch(url)
          .then(response => response.json())
          .then(result => {//when done encoding
            console.log(result);
            Image.src = result.message})
          .catch(err => 
            console.log(err.message)
          )
        }, [])    

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
                    <div className="container photo-container">
                    <img src={storeImg} alt="profile photo"/>
                    </div>
                    <p>
                    Name: {displayName} ({storeName})
                    </p>
                    <p> 
                    Email: {displayEmail}
                    </p>
                    <p>
                    Age: {storeAge}
                    </p>
                    <p>
                    Gender: 
                    <span className="material-icons md-48" aria-label="gender">{storeGender}</span>
                    </p>
                    <p>
                    Status:  {storeBio}
                    </p>
                </div>

                <div className="container d-flex justify-content-center">
                    <button className="primary-bt" type="info-edition" value="info-editio"><Link to="/info-edition">Info Edit</Link></button>
                </div>
            </div>

            <div className='mood-daily'>
                <h2 className='primary-dark-color'>Past Mood Diary</h2>
                <div className="container" id="front">
                <div className="container d-flex justify-content-center">
                    <button className="primary-bt col-xs-3 mr-2 mb-2" type="view" value="view-all"><a href="/graph">
                    View Past Data</a></button>
                </div></div>
            </div>

            <div className="liked-music">
                <div className="container" id="front">
                    <RecommandMusic mood={mood}/>
                    
                </div>
            </div>

            <div className="random-picture">
                <h2 className='primary-dark-color'>Today's Picture For You</h2>
                <div className="container" id="front">
                    <div className="container d-flex justify-content-center">
                    <img src={url} alt="today's random photo for you"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
    
    );
}