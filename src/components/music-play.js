import React from 'react';

export function PlayMusic(props) {
    const typeObj = props.type;



}

const musicSample = [{musicName:"Beat", mood:"Repulse", audioLink:"", musicType:["rock","quick"]},
{musicName:"Asad", mood:"Fuming", audioLink:"", musicType:["rock","quick"]},
{musicName:"fgsraetehf", mood:"Stressed", audioLink:"", musicType:["rock","quick","pop"]}];

const moodSample = [{mood:"Repulse", color:"#EB8075", index:1},
{mood:"Fuming", color:"#EB8075",index:2},
{mood:"Stressed", color:"#E55A90",index:3}];

const typeSample = [{musicType:"rock", playPageLink:<PlayMusic type="rock"/>, musicList:[]},
{musicType:"quick", playPageLink:"/#"},
{musicType:"pop", playPageLink:"/#"}];

const moodMusicObj = {};
for(const musicObj of musicSample) {
    if(moodMusicObj.hasOwnProperty("{musicObj.mood}")) {
        moodMusicObj.moodMusicObj["{musicObj.mood}"].push("{musicObj.audioLink}");
    } else {
        moodMusicObj["{musicObj.mood}"] = [];
    }
    
}

const typeSampleList = [];

