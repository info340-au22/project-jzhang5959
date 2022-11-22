import React from 'react';
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
                <button className="primary-bt"><a href="mood-log.html">Place My Mood</a></button>
            </div>

            <div className="recommand-music inline-block">
                <h2 >Get Your Mood Music</h2>
                <div className="container text-center dash-border-light-bg">
                    <div className="row my-3 px-2"> 
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><h3>Today's Mood</h3></div>
                        <div className="col"></div>
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><button className="primary-bt"><a href="mood-log.html">Place Your Mood</a></button></div>
                    </div>
                    
                    
                    <div className="container  items-center">
                        <div className="d-flex justify-content-evenly row">

                            <div className="col">
                                    <div className="square-md repulse-bg m-4">
                                        <div className="p-5" >
                                            <a href="music-play.html" className="style-bt">Repulse</a>
                                        </div>
                                    </div>
                            </div>

                            <div className="col">
                                    <div className="square-md fuming-bg m-4">
                                        <div className="p-5" >
                                            <a href="music-play.html" className="style-bt">Fuming</a>
                                        </div>
                                    </div>
                            </div>

                            <div className="col">
                                    <div className="square-md stressed-bg m-4">
                                        <div className="p-5" >
                                            <a href="music-play.html" className="style-bt">Stressed</a>
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
                {homeContent}
            </main>

            <Footer />

        </div>
    );
}
