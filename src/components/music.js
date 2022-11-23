import React from 'react';
const recommandMusicSample = [{mood:"Repulse", color:"#E8988E", playPageLink:"/#", musicType:["quick","sad"]},
{mood:"Fuming", color:"#EB8075", playPageLink:"/#", musicType:["slow","sad"]},
{mood:"Stressed", color:"#E55A90", playPageLink:"/#", musicType:["quick","sad","acoustic"]}]


// filter today's recommand music const recommandMusicSample = musicSample.filter()
const musicSample = [{mood:"Repulse", color:"#E8988E", playPageLink:"/#", musicType:["quick","sad"]},
{mood:"Fuming", color:"#EB8075", playPageLink:"/#", musicType:["slow","sad"]},
{mood:"Stressed", color:"#E55A90", playPageLink:"/#", musicType:["quick","sad","acoustic"]},
{mood:"Repulse", color:"#E8988E", playPageLink:"/#", musicType:["quick","sad"]},
{mood:"Fuming", color:"#EB8075", playPageLink:"/#", musicType:["slow","sad"]},
{mood:"Stressed", color:"#E55A90", playPageLink:"/#", musicType:["quick","sad","acoustic"]}]

export function RecommandMusicSection() {
    const musicList = recommandMusicSample.map((obj) => {
        return (
            <div className="col">
                <div className="square-md m-4" style={{backgroundColor: obj.color}}>
                    <div className="p-5" >
                        <a href="{obj.playPageLink}" className="style-bt">{obj.mood}</a>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="recommand-music inline-block">
                <h2 className="primary-dark-color">Get Your Mood Music</h2>
                <div className="container text-center dash-border-light-bg">
                    <div className="row my-3 px-2"> 
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><h3>Today's Mood</h3></div>
                        <div className="col"></div>
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><button className="primary-bt"><a href="mood-log.html">Place Your Mood</a></button></div>
                    </div>
                    
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            {musicList}
                        </div>
                    </div>
                </div>
            </div> 
    )
}


export function StyleMusicSection() {
    const musicRow = musicSample.map((obj) => {
        const styleList = obj.musicType.map((type) => {
            return(
                <li className="list-inline-item">
                    <div class="col"><button class="btn btn-dark" id={type}>{type}</button></div>
                </li>
            )
        });

        return (
            <div className="col">
                <div className="row d-flex justify-content-center">
                    <div className="card p-3 square-sm mx-3 ">
                        <div>
                            <a className="heading-style primary-dark-color" href="{obj.playPageLink}">{obj.mood}</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <ul className="d-flex justify-content-center m-0 align-content-start flex-wrap">
                        {styleList}
                    </ul>
                 </div>
            </div>
        )
    });

    return(
        <div className="container style-music">
                <div className="container mt-5 mb-3">
                    <h2 className="primary-dark-color">Choose Style</h2>
                    <div className="row text-center">
                        {musicRow}
                    </div>
                </div>
            </div>
    )
}

export default function Music() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1 className="primary-dark-color">Music With Your Mood</h1>
                </div>
            </header>

            <RecommandMusicSection />
            <StyleMusicSection />
        </div>
    )
}