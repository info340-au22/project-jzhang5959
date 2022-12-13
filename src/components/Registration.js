import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {getDatabase, ref, set as firebaseSet, onValue, push as firebasePush, child, get} from 'firebase/database';

export default function Register(props) {
    const [name, updateName] = useState();
    const [age, updateAge] = useState("");
    const [gender, updateG] = useState("girl");
    const [bio, setBio] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const currentUser = props.currentUser;
    const displayName = props.currentUser.userName;
    const displayEmail = props.currentUser.userEmail;
    const newR = props.newR;

    const nameChange = (event) => {
        const username = event.target.value;
        updateName(username);
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

      const bioChange = (event) => {
        const bio = event.target.value;
        setBio(bio);
        setSubmitted(false);
      }
    console.log(props.currentUser.userEmail);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || age === '' || gender === '' || bio === '') {
          setError(true);
          saveStateToLocalStorage();
        } else {
          setSubmitted(true);
          setError(false);
        }
        newR(name, gender, bio, age);
        firebasePush(allMessageRef, addUser);
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

    const state = [{name: {name}, email: {displayEmail}, age: {age}, gender:{gender}, bio:{bio}}];

    const saveStateToLocalStorage = () => { 
        localStorage.setItem('state', JSON.stringify({state})); 
      };
    
    const db = getDatabase();
    const allMessageRef = ref(db, "Register");
    const addUser = {
      "name": name,
      "email": displayEmail,
      "gender": gender,
      "age": age,
      "bio": bio
    }

    useEffect(() => { 

    const offFunction = onValue(allMessageRef, (snapshot) => {
      const valueObj = snapshot.val();
      console.log(valueObj);
    })

    function cleanup() {
      console.log("component is being added");
      offFunction();
    }

    return cleanup; 
    }, []);


    return (
        <div className="container-fluid">
        <header>
            <h1>Provide More Info</h1>
            <p>Welcome to your world, {displayName}</p>
        </header> 

        <main className="create-profile">
            <form id="survey">
                <div className="container">
                    <label key="name" id="label-name">Preferred Name</label>
                    <input type="text"
                        id="name"
                        placeholder="What is your perferred name?" 
                        value={name} 
                        onChange={nameChange}/>
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
                        <option value="girl">Female</option>
                        <option value="boy">Male</option>
                        <option value="emoji_nature">Other</option>
                        <option value="person">Perfer not to say</option>
                    </select>
                </div>

                <div className="container">
                    <label key="mood" id="label-mood">What do you want to show on your profile?</label>
                    <input type="text"
                        id="mood"
                        placeholder="Any feelings or words?" 
                        value={bio}
                        onChange={bioChange}/>
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