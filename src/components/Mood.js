import React from 'react';

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
            <div class="container">
                <h1>Mood Log</h1>
            </div>
        </header>
    );
}

function CardWarp() {
    return (
        <div className="container">
          <h2>How is your day? </h2>
            <div className="card-container row d-flex justify-content-evenly mood-log-space">
                <SleepCard />
                <MoodRadio />
                <div class="d-flex justify-content-center">
                    <button class="btn save p-3 m-4" type="submit">Save</button>
                    <a class="btn save p-3 m-4" href="mood-vis.html">View the Graphs</a>
                </div>
            </div>
        </div>
    );
}

function SleepCard() {
    return (
        <div className="m-2 col-lg-5 col-xl-6 col">
            <div className="card row p-2 mb-3 mood-card">
                <div className="card-body">
                    <p> How long did you sleep last night? </p>
                    <div className="slidecontainer">
                        <input type="range" min="0" max="15" value="8" className="slider" oninput="this.nextElementSibling.value = this.value"/>
                        <output>8</output>
                    </div>
                </div>
            </div>

            <div className="card row p-4 mood-card">
                <label for="moodquestion" className="mb-2">Daily Note</label>
                <textarea id="moodquestion" name="moodquestion" placeholder="Write something.." aria-label="mood log text input"></textarea>
            </div>
        </div>
    );
}

function MoodRadio () {
    return(
    <div className="card m-2 p-2 col-lg-6 col-xl-5 six-dots-container mood-card">
        <div class="card-body">
            <p> How is your mood today? </p>
            <div class="row">
                <div class="col-1">
                    <p class="vertical axis">&larr; Energy</p>
                </div>
                <div class="col-11 six-dots">
                    <RadioWrap moods = {moods}/>
                    <div>
                        <p class="axis d-flex justify-content-evenly">
                            <span class="negative"></span>
                            <span class="positive">Positive &rarr; </span>
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
                    <div class="ggtool" key={item}>
                        <input type="radio" name="mood" value={item} className={`input-radio ${item}`}/>
                        <span class="tooltiptext">{item}</span>
                    </div>; //pass prop down!
                return component; //add this new component to resulting array
             })
            return (
                <div class="d-flex flex-row" key = {key}>
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


export function Mood() {

    return (

        <div>
            <MoodHeader />

            <main>
                <CardWarp />
            </main>
        </div>
    );
}
