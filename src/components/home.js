import React from 'react';

import { Link } from "react-router-dom";
import {NavHead} from './Nav';
import {Footer} from './Footer';

function homeContent() {
    return (
        <div>
            <div> 
                <div className="illustration-container">
                    <img src="../../public/img/think.svg" alt="a woman thinking illustration" />
                </div>
                
                <div className="text-end me-4 illustration-cite">
                    <a href="https://storyset.com/people">-- People illustrations by Storyset</a>
                </div>
            </div>

            <div clasName="container home-mood-fill">
                <h2>How do you feel today?</h2>
                <button class="primary-bt"><a href="mood-log.html">Place My Mood</a></button>
            </div>

            <div className="recommand-music inline-block">
                <h2 >Get Your Mood Music</h2>
                <div class="container text-center dash-border-light-bg">
                    <div class="row my-3 px-2"> 
                        <div class="col-lg-3 col-md-5 col-sm-5 my-1"><h3>Today's Mood</h3></div>
                        <div class="col"></div>
                        <div class="col-lg-3 col-md-5 col-sm-5 my-1"><button class="primary-bt"><a href="mood-log.html">Place Your Mood</a></button></div>
                    </div>
                    
                    
                    <div class="container  items-center">
                        <div class="d-flex justify-content-evenly row">

                            <div class="col">
                                    <div class="square-md repulse-bg m-4">
                                        <div class="p-5" >
                                            <a href="music-play.html" class="style-bt">Repulse</a>
                                        </div>
                                    </div>
                            </div>

                            <div class="col">
                                    <div class="square-md fuming-bg m-4">
                                        <div class="p-5" >
                                            <a href="music-play.html" class="style-bt">Fuming</a>
                                        </div>
                                    </div>
                            </div>

                            <div class="col">
                                    <div class="square-md stressed-bg m-4">
                                        <div class="p-5" >
                                            <a href="music-play.html" class="style-bt">Stressed</a>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

        </div>
    );
}

export default function Home() {

    return (

        <div>
            <NavHead />
            
            <header>
            <div className="container dash-border-light-bg">
                <h1>Welcome to Your Moody Space</h1>
            </div>
            </header>

            <main>
                <homeContent />
            </main>

            <Footer />

        </div>
    );
}
