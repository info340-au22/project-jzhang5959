import React from 'react';
import { Link } from "react-router-dom";


export function mainProfile() {

    return (
    <>
    <div className="container-fluid">
        <header>
            <div className="profile-header">
            <h1>Profile</h1>
            </div>
        </header> 

        <div id="profile">
            <section id="basic-info">
                <h2>Bellage2003</h2>

                <div className="container" id="front">
                    <img src="img/profile-photo.jpg" alt="profile photo"/>
                    <a style="background-color:#153C43;color:white;text-decoration:none;padding:4px 6px;
                        font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, sans-serif;
                        font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" 
                        href="https://unsplash.com/@michaeldam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" 
                        title="Download free do whatever you want high-resolution photos from Michael Dam"><span style="display:inline-block;padding:2px 3px;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32">
                        <title></title>
                        <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 
                        0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">
                        </path></svg></span>
                        <span style="display:inline-block;padding:2px 3px;">Michael Dam</span></a>
                    <button type="edit" value="edit-photo">Edit your photo</button>
                    <p> Gender: 
                    <span className="material-icons md-48" aria-label="gender">girl</span>
                    Status: 
                    <span className="material-icons md-48" aria-label="gender">bed</span>
                    </p>
                    <p>Enjoy my life. </p>
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

                <button type="view" value="view-all">View All</button>
            </section>

            <section id="recent-music">
                <h2>Most Recent Listened Music</h2>

                <div className="container" id="front">
                    <img src="img/recent-music.png" alt="album's photo"/>
                    <p>BLACKPINK-STAY</p>
                    <button type="music" value="play-music">Play Now ~</button>
                </div>
            </section>

        </div>


    </div>
     <nav>
     <Link to="/profile">Profile</Link>
    </nav>
    </>
    );
}