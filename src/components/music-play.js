import React from 'react';
import MUSIC_SAMPLE from '../data/music-sample.json';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
{"rock":[], "quick": []}
*/
    const typeMusicObj = {};
    for(const musicObj of MUSIC_SAMPLE) {
        const typeList = musicObj.musicType;
        const audioLink = musicObj.audioLink;
        for(const type of typeList) {
            if(typeMusicObj.hasOwnProperty(type)) {
                typeMusicObj[type].push(audioLink);
            }
            else {
                typeMusicObj[type] = [];
                typeMusicObj[type].push(audioLink);
            }
        }
    };

export default function MusicPlay(props) {
    const type = "rock";
    const typeMusicList = typeMusicObj[type];
    const musicList = [];
    for (const obj of MUSIC_SAMPLE) {
        for(const musicLink of typeMusicList) {
            if(obj.audioLink == musicLink) {
                musicList.push(
                    <div className="row my-4">
                        <div className="col-11"> 
                            <p>{obj.musicName}</p>
                        </div>
        
                        <audio controls>
                            <source src={obj.audioLink} type="audio/mpeg"></source>
                        </audio>
                    </div>
                )
            }
        }
    }

    const typeName = type[0].toUpperCase() + type.substring(1);
    return(
        <div className="container-fluid music-play-bg">
            <header>
                <div>
                    <h1>Enjoy Your Mood Music</h1>
                </div>
            </header>

            <main>

                <div className="container play-music">
                    <div class="music-name square-md">
                        <h2>{typeName}</h2>
                    </div>
                    {musicList}
                </div>
            </main>

        </div>
    );
}
