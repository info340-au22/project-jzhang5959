import React from 'react';
import MUSIC_SAMPLE from '../../data/music-sample.json';
import MOOD from '../../data/MOODS.json';
import ReactAudioPlayer from 'react-audio-player';

const moodMusicObj = {};
for(const musicObj of MUSIC_SAMPLE) {
    const moodList = musicObj.mood;
    for(const mood of moodList) {
        if(moodMusicObj.hasOwnProperty(mood)) {
            moodMusicObj[mood].push(musicObj.musicName);
        }
        else {
            moodMusicObj[mood] = [];
            moodMusicObj[mood].push(musicObj.musicName);
        }
    }
}

export default function RecommandMusic(props) {
    const mood = props.mood;
    const moodName = mood[0].toUpperCase() + mood.substring(1);
    const moodList = moodMusicObj[mood];
    const random = Math.floor(Math.random() * moodList.length);
    const randomMusicName = moodList[random];
    let music = MUSIC_SAMPLE.find(item => item.musicName === randomMusicName);
    let color = MOOD.find(item => item.mood === mood).color;
    let audioLink = "audio/" + music.audioLink;

    return(
        <div className="recommand-music container">
                <h2 className="primary-dark-color">Get Your Mood Music</h2>
                <div className="container text-center dash-border-light-bg">
                    <div className="row my-3 px-2"> 
                        <div className="col-lg-5 col-md-5 col-sm-5 my-1 mx-2"><h3>Today's Mood</h3></div>
                        <div className="col"></div>
                        <div className="col-lg-5 col-md-5 col-sm-5 my-1 mx-2"><button className="primary-bt"><a href="/mood">Place Your Mood</a></button></div>
                    </div>
                    
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col" key={mood}>
                                <div className="square-recommand-music" style={{backgroundColor: color}}>
                                    <div>
                                        < div className='row mt-3'>
                                            <em className="fa fa-heart" aria-label="like"></em>  
                                        </div>
                                        <div className='row'>
                                            <p className="style-bt" key={mood} >{moodName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='music-header'> 
                            <p>{music.musicName}</p>
                        </div>

                        <div className='row'>
                            <ReactAudioPlayer src={audioLink} autoplay controls />        
                        </div>
                    </div>
                </div>
            </div> 
    )
}