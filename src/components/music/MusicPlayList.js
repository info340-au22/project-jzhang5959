import React from 'react';
import MUSIC_SAMPLE from '../../data/music-sample.json'
import { useParams } from 'react-router-dom';
import { typeMusicObject } from './StyleMusic'
import ReactAudioPlayer from 'react-audio-player';

export default function MusicPlayPage() {
    const params = useParams();
    const type = params.musicType;
    const typeMusicList = typeMusicObject(MUSIC_SAMPLE);
    const nameList = typeMusicList[type];

    const musicList = [];
    for(const name of nameList) {
        for(const music of MUSIC_SAMPLE) {
            let audioLink = "../audio/" + music.audioLink;
            if(music.musicName === name) {
                musicList.push(
                    <div className="row my-4" key={music.musicName}>
                        <div className='music-header'> 
                            <p>{music.musicName}</p>
                        </div>
                        <div className='row'>
                            <ReactAudioPlayer src={audioLink} autoplay controls />        
                        </div>
                    </div>
                )
            }
        }
    }

    const typeName = type[0].toUpperCase() + type.substring(1);
    return (
        <div className="container-fluid music-play-bg">
            <header>
                <div>
                    <h1>Enjoy Your Mood Music</h1>
                </div>
            </header>
            <main>
                <div className="container play-music">
                    <div className="music-name square-md">
                        <h2>{typeName}</h2>
                    </div>
                    {musicList}
                </div>
            </main>

        </div>
    );
}