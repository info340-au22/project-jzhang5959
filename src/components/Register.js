import React from 'react';
import {Footer} from './Footer';

export default function Register() {
    return (
        <div className="container-fluid">
        <header>
            <h1>Create Your Account</h1>
        </header> 

        <main id="create-profile">
            <form id="survey">
                <div className="container">
                    <label key="name" id="label-name">Name</label>
                    <input type="text"
                        id="name"
                        placeholder="What is your name?" />
                </div>

                <div className="container">
                    <label key="email" id="label-email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="What is your email?" />
                </div>

                <div className="container">
                    <label key="password" id="label-password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password?" />
                </div>

                <div className="container">
                    <label key="age" id="label-age">Age</label>
                    <input type="text"
                        id="age"
                        placeholder="What is your age?" />
                </div>

                <div className="container">
                    <label key="gender" id="label-gender">Gender</label>
                    <select name="gender" id="gender">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="no-binary">Non-binary</option>
                        <option value="transgender">Transgender</option>
                        <option value="intersex">Intersex</option>
                        <option value="not-to-say">Perfer not to say</option>
                    </select>
                </div>

                <div className="container">
                    <label key="mood" id="label-mood">Do you remember your mood yesterday?</label>
                    <input type="text"
                        id="mood"
                        placeholder="Any feelings or mood?" />
                </div>

                <div className="container">
                    <label key="often-mood" id="label-often">How often do you have a bad mood?</label>
                    <select name="often-mood" id="often-mood">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="once">Once/Twice a month</option>
                        <option value="2-3months">Every 2-3 months</option>
                        <option value="2-3year">2-3 times per year</option>
                        <option value="dont-know">I don't know</option>
                    </select>
                </div>

                <div className="container">
                    <button type="join" value="join" onClick="document.location='profile.html'">Join now</button>
                </div>

                <div className="create-intro">
                    <h3>This Is Your Own World~</h3>
                    <img src="img/create-profile.jpeg" alt="Smile face for new users" />
                </div>
            </form>

        </main>

       {Footer};
    </div>

    )
}