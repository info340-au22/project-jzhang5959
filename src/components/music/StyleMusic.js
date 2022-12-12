import React from 'react';
import { Link } from 'react-router-dom'
import MUSIC_SAMPLE from '../../data/music-sample.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export function typeMusicObject(MUSIC_SAMPLE) {
    /*
    {"rock":[“MusicName”, “Name2”], "quick": []}
    */
    const typeMusicObj = {};
    for(const musicObj of MUSIC_SAMPLE) {
        const typeList = musicObj.musicType;
        const musicName = musicObj.musicName;
        for(const type of typeList) {
            if(typeMusicObj.hasOwnProperty(type)) {
                typeMusicObj[type].push(musicName);
            }
            else {
                typeMusicObj[type] = [];
                typeMusicObj[type].push(musicName);
            }
        }
    };
    return typeMusicObj;
}



function StyleMusicCard(props) {
    // single style
    const type = props.type;
    const typeName = type[0].toUpperCase() + type.substring(1);
    return (
        <div className="col">
            <div className="row d-flex justify-content-center">
                <div className="card p-3 square-sm mx-3 ">
                    <div>
                        <Link to={"/music/"+ type} className="heading-style primary-dark-color">{typeName}</Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
}


export default function StyleMusicList(props) {
    const typeMusicObj =  typeMusicObject(MUSIC_SAMPLE);
    const styleList = Object.keys(typeMusicObj).map((type) => {
        return <StyleMusicCard type={type} key={type}/>
    })

    return(
        <div className="container style-music">
            <div className="container mt-5 mb-3">
                <h2 className="primary-dark-color">Choose Style</h2>
                <div className="row text-center">
                    {styleList}
                </div>
            </div>
        </div>
    );
}