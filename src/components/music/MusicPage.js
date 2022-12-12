import StyleMusicList from "./StyleMusic"
import RecommandMusic from "./RecommandMusic"

export default function MusicPage() {
    return (
        <div>
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">Music With Your Mood</h1>
                </div>
            </header>

            <RecommandMusic />
            <StyleMusicList  />
        </div>
    )
}