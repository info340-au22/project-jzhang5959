import React from 'react';
import {useState} from 'react';

const moods = {
    "1row":["enraged", "stressed", "shocked", "surprised", "motivated", "ecstatic"],
    "2row":["fuming", "angry", "restless", "energized", "optimistic", "excited"],
    "3row":["repulse", "worried", "peeved", "joyful", "hopeful", "blissful"],
    "4row":["disgusted", "excluded", "shamed", "at-ease", "content", "fullfilled"],
    "5row":["miserable", "lonely", "tired", "satisfied", "secured", "balanced"],
    "6row":["despair", "bored", "drained", "calm", "tranquil", "serene"]
};

function MoodHeader() {
    return(
        <header>
            <div className="container dash-border-light-bg">
                <h1 className="primary-dark-color">MOOD LOG</h1>
            </div>
        </header>
    );
}

function CardWarp() {
    return (
        <div className="container">
          <h2 className="primary-dark-color">How is your day? </h2>
          <form>
                <div className="card-container row d-flex justify-content-evenly mood-log-space">
                    <SleepCard />
                    <MoodRadio />
                    <div className="d-flex justify-content-center">
                        <button className="btn save p-3 m-4" type="submit">Save</button>
                        <a className="btn save p-3 m-4" href="mood-vis.html">View the Graphs</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Slider() {
    const [value, setValue] = useState(0);
    const MAX = 15;
    const getBackgroundSize = () => {
	return {
		backgroundSize: `${(value * 100) / MAX}% 100%`,
	};
    }
    return(
        <div className="slidecontainer">
            <label for="sleep-time" className="d-none">How many hours did you sleep?</label>
            <input type="range" min="0" max={MAX} onChange={(e) => setValue(e.target.value)} style={getBackgroundSize()} value={value} id="sleep-time"/>
            <p>You slept for <output className="primary-dark-color">{value}</output> hours last night. </p>
        </div>
    );
    
}

function SleepCard() {
    return (
        <div className="m-2 col-lg-5 col-xl-6 col">
            <div className="card row p-2 mb-3 mood-card">
                <div className="card-body">
                    <p className="primary-dark-color"> How long did you sleep last night? </p>
                    
                    <div className="slidecontainer">
                        <Slider />
                    </div>
                </div>
            </div>

            <div className="card row pt-3 pb-3 ps-3 pe-4 mood-card">
                <label for="moodquestion" className="mb-2 primary-dark-color">Daily Note</label>
                <textarea className="m-2" id="moodquestion" name="moodquestion" placeholder="Write something.." aria-label="mood log text input"></textarea>
            </div>
        </div>
    );
}

function MoodRadio () {
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



function RadioHelper(props) {
    const moods = props.moods;
    const row = props.row;

    for (let [key, value] of Object.entries(moods)) {
        if (key === row) {
            const radio = value.map((item) => {
                const component = 
                    <div className="ggtool" key={item}>
                        <label for="mood" className="d-none">Are you {item} ?</label>
                        <input type="radio" name="mood" value={item} id={item} className={`input-radio ${item}`}/>
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

function RadioWrap(props) {
    const moods = props.moods;
    const result = [];
    for (let key in moods) {
        result.push(<div class="d-flex flex-row">
                        <RadioHelper moods={moods} row={key} />
                    </div>);
    }
    return result;
}


export default function Mood() {

    return (

        <div>
            <MoodHeader />

            <main>
                <CardWarp />
            </main>
        </div>
    );
}
