import React from 'react';
import MUSIC_SAMPLE from '../../data/music-sample.json'
import { useParams } from 'react-router-dom';
import { typeMusicObject } from './StyleMusic'

export default function MusicPlayList() {
    const params = useParams();
    const type = params.musicType;
    console.log(params);
    const typeMusicList = typeMusicObject(MUSIC_SAMPLE);
    const nameList = typeMusicList.get(type);

    const musicList = [];
    for(const name of nameList) {
        for(const music of MUSIC_SAMPLE) {
            if(music.musicName === name) {
                musicList.push(
                    <div className="row my-4">
                        <div className="col-11"> 
                            <p>{music.musicName}</p>
                        </div>
        
                        <audio controls>
                            <source src={music.audioLink} type="audio/mpeg"></source>
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