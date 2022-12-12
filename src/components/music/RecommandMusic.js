import React from 'react';

const recommandMusicSample = [{mood:"Repulse", color:"#E8988E", playPageLink:"/#", musicType:["quick","sad"]},
{mood:"Fuming", color:"#EB8075", playPageLink:"/#", musicType:["slow","sad"]},
{mood:"Stressed", color:"#E55A90", playPageLink:"/#", musicType:["quick","sad","acoustic"]}]


export default function RecommandMusic() {
    const musicList = recommandMusicSample.map((obj) => {
        return (
            <div className="col" key={obj.mood}>
                <div className="square-md " style={{backgroundColor: obj.color}}>
                    <div className="p-5" >
                        <a href="{obj.playPageLink}" className="style-bt" key={obj.mood}>{obj.mood}</a>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="recommand-music container">
                <h2 className="primary-dark-color">Get Your Mood Music</h2>
                <div className="container text-center dash-border-light-bg">
                    <div className="row my-3 px-2"> 
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><h3>Today's Mood</h3></div>
                        <div className="col"></div>
                        <div className="col-lg-3 col-md-5 col-sm-5 my-1"><button className="primary-bt"><a href="/mood">Place Your Mood</a></button></div>
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