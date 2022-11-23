import React from 'react';
import {NavHead} from './Nav';
import {Footer} from './Footer';
import {RecommandMusicSection} from './music';

function HomeContent() {
    return (
        <div>
            <div> 
                <div className="illustration-container">
                    <img className="think-img" src="img/think.svg" alt="a woman thinking illustration" />
                </div>
                
                <div className="text-end me-4 illustration-cite">
                    <a href="https://storyset.com/people">-- People illustrations by Storyset</a>
                </div>
            </div>

            <div className="container home-mood-fill">
                <h2 className="primary-dark-color">How do you feel today?</h2>
                <button className="primary-bt"><a href="/#">Place My Mood</a></button>
            </div>

            <RecommandMusicSection />
        </div>
    );
}

export default function Home() {

    return (

        <div>
            <header>
            <div className="container dash-border-light-bg">
                <h1 className="primary-dark-color">Welcome to Your Moody Space</h1>
            </div>
            </header>

            <main>
                <HomeContent />
            </main>
        </div>
    );
}
