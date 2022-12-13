import React from 'react';
import {useState, useEffect} from 'react';
import {Link, Navigate } from 'react-router-dom';

import {ref,push,child,update,getDatabase,onValue} from "firebase/database";
import MoodDisplay from './MoodDisplay';

const moods = {
    "1row":["enraged", "stressed", "shocked", "surprised", "motivated", "ecstatic"],
    "2row":["fuming", "angry", "restless", "energized", "optimistic", "excited"],
    "3row":["repulse", "worried", "peeved", "joyful", "hopeful", "blissful"],
    "4row":["disgusted", "excluded", "shamed", "at-ease", "content", "fullfilled"],
    "5row":["miserable", "lonely", "tired", "satisfied", "secured", "balanced"],
    "6row":["despair", "bored", "drained", "calm", "tranquil", "serene"]
};

const moodObjects = {
    "1row":[{mood:"enraged", color:'#F04E48', index:1}, {mood:"stressed", color:'#E55A90', index:2}, {mood:"shocked", color:'#EAACC1', index:3}, {mood:"surprised", color:'#E89C5D', index:4}, {mood:"motivated", color:'#e7b64b', index:5}, {mood:"ecstatic", color:'#E9D05A', index:6}],
    "2row":[{mood:"fuming", color:'#EB8075', index:7}, {mood:"angry", color:'#E874A3', index:8}, {mood:"restless", color:'#EBADC4', index:9}, {mood:"energized", color:'#E99C5C', index:10}, {mood:"optimistic", color:'#E4B063', index:11}, {mood:"excited", color:'#e4e47d', index:12}],
    "3row":[{mood:"repulse", color:'#E8988E', index:13}, {mood:"worried", color:'#E8B0C2', index:14}, {mood:"peeved", color:'#E5C4CE', index:15}, {mood:"joyful", color:'#EAC192', index:16}, {mood:"hopeful", color:'#e5d58e', index:17}, {mood:"blissful", color:'#e1dc84', index:18}],
    "4row":[{mood:"disgusted", color:'#9c8db0', index:19}, {mood:"excluded", color:'#8d9eb7', index:20}, {mood:"shamed", color:'#9caeb8', index:21}, {mood:"at-ease", color:'#BBD4A3', index:22}, {mood:"content", color:'#87a49c', index:23}, {mood:"fullfilled", color:'#758c97', index:24}],
    "5row":[{mood:"miserable", color:'#8973a6', index:25}, {mood:"lonely", color:'#788aa5', index:26}, {mood:"tired", color:'#83a0b0', index:27}, {mood:"satisfied", color:'#95C982', index:28}, {mood:"secured", color:'#649f8d', index:29}, {mood:"balanced", color:'#5f8699', index:30}],
    "6row":[{mood:"despair", color:'#74618D', index:31}, {mood:"bored", color:'#5B6B83', index:32}, {mood:"drained", color:'#7499AD', index:33}, {mood:"calm", color:'#85C663', index:34}, {mood:"tranquil", color:'#4EA48A', index:35}, {mood:"serene", color:'#3A7492', index:36}]
};

export default function Mood(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [moodsList, setMoodsList] = useState([]);
    const currentUser = props.currentUser;
    const [note, updateNote] = useState('');
    const [mood, updateMood] = useState('');
    const [sleepValue, setSleepValue] = useState(8);
    const MAX = 15;
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(sleepValue * 100) / MAX}% 100%`,
        };
    }
    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "sleep-time"){
    //         updateSleep(value);
    //     }
    //     // if(id === "moodquestion"){
    //     //     updateNote(value);
    //     // }
    //     // if(id === "moodInput"){
    //     //     updateMood(value);
    //     // }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (note===''||mood===''||sleepValue==='') {
            alert(`Please fill all of the fields before submitting`);
        } else {
            alert(`Your mood today has been placed! `);
            console.log(date, sleepValue, note, mood);
            //console.log(currentUser)
            const userObj = currentUser;
            let moodObj = {
                "userEmail": props.currentUser.userEmail,
                "userName": props.currentUser.userName,
                "date" : date,
                "sleepValue":sleepValue,
                "note":note,
                "mood":mood,
            } 
            // const newPostKey = push(child(ref(db), 'moodLogs')).key;
            // const updates = {};
            // updates['/' + newPostKey] = moodObj;
            // return update(ref(db), updates);

            
            push(allMessageRef, moodObj);
            return <Navigate to="/register" />;
        }
    }
    const db = getDatabase();
    const allMessageRef = ref(db, 'MoodLogs');
    // useEffect(() => { 

    //     const offFunction = ref(allMessageRef, (snapshot) => {
    //       const valueObj = snapshot.val();
    //       console.log(valueObj);
    //     })
    
    //     function cleanup() {
    //       console.log("component is being added");
    //       offFunction();
    //     }
    
    //     return cleanup; 
    //     }, []);

    useEffect(() => {
        //when db value changes
        const offFunction = onValue(allMessageRef, (snapshot) => {
          const valueObj = snapshot.val();
          //convert object into array
          const objKeys = Object.keys(valueObj);
          const objArray = objKeys.map((keyString) => {
            const theMoodObj = valueObj[keyString];
            theMoodObj.key = keyString;
            return theMoodObj;
          })
        //   console.log(Array.isArray(objArray));
          setMoodsList(objArray);
        //   console.log(objArray);
        })
    
        function cleanup() {
          console.log("component is being removed");
        //when the component goes away, we turn off the listener
        offFunction();
        }
        return cleanup; //return instructions on how to turn off lights
      }, [])

    const MoodRadio = () => {
        return(
        <div className="card m-2 p-2 col-lg-6 col-xl-5 six-dots-container mood-card">
            <div className="card-body">
                <p className="mb-4 ms-4 primary-dark-color"> How is your mood today? </p>
                <div className="row">
                    <div className="col-1">
                        <p className="vertical axis">&larr; Energy</p>
                    </div>
                    <div className="col-11 six-dots">
                        <RadioWrap moods = {moods}/>
                        <div>
                            <p className="axis d-flex justify-content-evenly">
                                <span className="negative"></span>
                                <span className="positive pt-1">Positive &rarr; </span>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    
    
    const RadioHelper = (props) => {
        const moods = props.moods;
        const row = props.row;
    
        for (let [key, value] of Object.entries(moods)) {
            if (key === row) {
                const radio = value.map((item) => {
                    const component = 
                        <div className="ggtool" key={item}>
                            <label for="mood" className="d-none">Are you {item} ?</label>
                            <input type="radio" name="mood" value={item} id="moodInput" className={`input-radio ${item}`} onChange={(e) => updateMood(e.target.value)} />
                            <span className="tooltiptext">{item}</span>
                        </div>; //pass prop down!
                    return component; //add this new component to resulting array
                 })
                return (
                    <div className="d-flex flex-row" key = {key}>
                        {radio}
                    </div>
                );
            }
        } 
    }
    
    const RadioWrap = (props) => {
        const moods = props.moods;
        const result = [];
        for (let key in moods) {
            result.push(<div className="d-flex flex-row">
                            <RadioHelper moods={moods} row={key} />
                        </div>);
        }

        return result;
    }



    return (

        <div>
    
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">NEW MOOD LOG</h1>
                </div>
            </header>

            <main>
                <div className="container">
                    <h2 className="primary-dark-color ms-3" >How is your day?</h2>
                    <h3 className="primary-dark-color ms-3">{date}</h3>
                    <form onSubmit={handleSubmit}>
                     <div className="card-container row d-flex justify-content-evenly mood-log-space">
                        <div className="m-2 col-lg-5 col-xl-6 col">
                            <div className="card row p-2 mb-3 mood-card">
                                <div className="card-body">
                                    <p className="primary-dark-color"> How long did you sleep last night? </p>
                                    
                                    <div className="slidecontainer">
                                        <div className="slidecontainer">
                                            <label for="sleep-time" className="d-none">How many hours did you sleep?</label>
                                            <input type="range" min="0" max={MAX} onChange={(e) => setSleepValue(parseInt(e.target.value))} style={getBackgroundSize()} value={parseInt(sleepValue)} id="sleep-time"/>
                                            <p>You slept for <output className="primary-dark-color">{sleepValue}</output> hours last night. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card row pt-3 pb-3 ps-3 pe-4 mood-card">
                                <label for="moodquestion" className="mb-2 primary-dark-color">Daily Note</label>
                                <textarea className="m-2" id="moodquestion" name="moodquestion" aria-label="mood log text input" onChange={(e) => updateNote(e.target.value)}></textarea>
                            </div>
                        </div>
                        <MoodRadio />
                        <div className="d-flex justify-content-center">
                            <a className="btn save p-3 m-4" href="mood-display">Go Back</a>
                            <input className="btn save p-3 m-4" type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
            </main>
        </div>
    );
}
