import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {getDatabase, ref, set as firebaseSet, onValue, push as firebasePush} from 'firebase/database';

export default function Register({newR}) {
    const [name, updateName] = useState("");
    const [email, updateEmail] = useState("");
    const [password, updateP] = useState("");
    const [age, updateAge] = useState("");
    const [gender, updateG] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    
    const nameChange = (event) => {
        const username = event.target.value;
        updateName(username);
        setSubmitted(false);
      }

    const emailChange = (event) => {
        const email = event.target.value;
        updateEmail(email);
        setSubmitted(false);
      }

    const pwChange = (event) => {
        const password = event.target.value;
        updateP(password);
        setSubmitted(false);
      }

    const ageChange = (event) => {
        const age = event.target.value;
        updateAge(age);
        setSubmitted(false);
      }

    const genderChange = (event) => {
        const gender = event.target.value;
        updateG(gender);
        setSubmitted(false);
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || email === '' || password === '' || age === '' || gender === '') {
          setError(true);
          saveStateToLocalStorage();
        } else {
          setSubmitted(true);
          setError(false);
        }
        newR(name, email, password, gender);
      };
    
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <h1>User {name} successfully registered!!</h1>
          </div>
        );
      };

      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
          </div>
        );
      };

    const state = [{name: {name}, email: {email}, password: {password}, age: {age}, gender:{gender}}];

    const saveStateToLocalStorage = () => { 
        localStorage.setItem('state', JSON.stringify({state})); 
      };
      
    const getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('state');  
        const initialValue = JSON.parse(data);
        return initialValue;
      };

    useEffect(() => { 
      const db = getDatabase(); //"the database"
      const allMessageRef = ref(db, "Register");

      //addEventLister("databse value change")
    //returns the instructions how to turn it off
    const offFunction = onValue(allMessageRef, (snapshot) => {
      const valueObj = snapshot.val();
      const objKeys = Object.keys(valueObj);

      console.log(valueObj);

     updateEmail(valueObj.email); //needs to be an array
    })

    //the useEffect callback returns...
    function cleanup() {
      console.log("component is being removed");
      console.log("turn out the lights");
      offFunction();
    }

    return cleanup; 
    }, []);

    const db = getDatabase(); //"the database"
    const allMessageRef = ref(db, "Register");
    const addUser = {
      "name": name,
      "email": email,
      "password": password,
      "gender": gender
    }
    firebaseSet(allMessageRef, addUser);

    return (
        <div className="container-fluid">
        <header>
            <h1>Create Your Account</h1>
        </header> 

        <main className="create-profile">
            <form id="survey">
                <div className="container">
                    <label key="name" id="label-name">Name</label>
                    <input type="text"
                        id="name"
                        placeholder="What is your name?" 
                        value={name} 
                        onChange={nameChange}/>
                </div>

                <div className="container">
                    <label key="email" id="label-email">Email</label>
                    <input type="email"
                        id="email"
                        placeholder="What is your email?" 
                        value={email} 
                        onChange={emailChange}/>
                </div>

                <div className="container">
                    <label key="password" id="label-password">Password</label>
                    <input type="password"
                        id="password"
                        placeholder="Enter your password?" 
                        value={password} 
                        onChange={pwChange}/>
                </div>

                <div className="container">
                    <label key="age" id="label-age">Age</label>
                    <input type="text"
                        id="age"
                        placeholder="What is your age?" 
                        value={age} 
                        onChange={ageChange}/>
                </div>

                <div className="container">
                    <label key="gender" id="label-gender">Gender</label>
                    <select className="form-select" id="gender" value={gender} onChange={genderChange}>
                        <option value="women">Female</option>
                        <option value="man">Male</option>
                        <option value="Not-to-say">Perfer not to say</option>
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
                    <button id="Join" type="join" value="join" onClick={handleSubmit}><Link to='/profile'>Join Now</Link></button>
                </div>

                <div className="create-intro">
                    <h3>This Is Your Own World~</h3>
                    <img src="img/create-profile.jpeg" alt="Smile face for new users" />
                </div>
            </form>

        </main>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>

    </div>

    )
}