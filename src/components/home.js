import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export function Home() {

    return (
        <>
            <header>
            <div className="container dash-border-light-bg">
                <h1>Welcome to Your Moody Space</h1>
            </div>
            </header>
            <nav>
            <Link to="/">Home</Link>
            |{" "}
            <Link to="/profile">Profile</Link>
            </nav>
        </>
    );
}