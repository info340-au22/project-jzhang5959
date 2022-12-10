import React, { useState } from 'react';
import {Link } from 'react-router-dom';

export default function Profile(props) {
    const storeEmail = props.Email;
    const storeName = props.Name;
    const storeGender = props.Gender;
    const storeBio = props.bio;
    const storeImg = props.Img;


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
                    Name: {storeName}
                    </p>
                    <p> 
                    Email: {storeEmail}
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

            <div className="recent-music">
                <h2 className='primary-dark-color'>Liked Songs</h2>
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