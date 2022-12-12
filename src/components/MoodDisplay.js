import React from 'react';

export default function MoodDisplay () {

    return (
        <div>
    
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">MOOD LOG</h1>
                </div>
            </header>

            <main>
                <div className="d-flex" style={{flexDirection: "row", justifyContent: "center"}}>
                    <a className="btn save p-3 m-4" href="http://localhost:3000/mood">Create New Mood Log</a>
                </div>
            </main>
        </div>
    );
}