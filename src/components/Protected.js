import React from 'react';

export default function Protected() {

    return (

        <div>

            <div className="home-mood-fill">
                <h1 className="primary-dark-color">Oops, you don't have permission to access this page. </h1>
                <p>Please log in to build your moody space. </p>

                <button className="primary-bt"><a href="/login">Login</a></button>
            </div>

            <div className='pb-5'> 
                <div className="illustration-container">
                    <img className="think-img" src="img/Mystery.svg" alt="a man looking into the mistery box" />
                </div>
                
                <div className="text-end me-4 illustration-cite">
                    <a href="https://storyset.com/people">-- People illustrations by Storyset</a>
                </div>
            </div>

        </div>
    );
}
