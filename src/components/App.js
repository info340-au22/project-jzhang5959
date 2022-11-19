import React from 'react';
import {Nav} from './Nav';
import {Footer} from './Footer';

export default function App() {
    return (
        <div>
            <Nav/>

            <div class="container-fluid">
                <header>
                    <div class="container dash-border-light-bg">
                        <h1>Welcome to Your Moody Space</h1>
                    </div>
                </header>
            </div>

            <main className="container">
            
            </main>
        
            <Footer/>
        </div>
      );
}