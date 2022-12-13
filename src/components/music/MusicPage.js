import StyleMusicList from "./StyleMusic"
import RecommandMusic from "./RecommandMusic"

export default function MusicPage(props) {
    const mood = props.mood;
    /*
    const currentUser = props.currentUser;
    const moodsList = props.moodsList
    .filter((moodObj) => {
       return moodObj.userEmail === props.currentUser.userEmail;
    })
    .sort((a,b) => b.date - a.date);

    console.log(props.moodsList);

    const currentUserMood = moodsList[0];
    const mood = currentUserMood.mood;
    */

    return (
        <div>
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">Music With Your Mood</h1>
                </div>
            </header>

            <RecommandMusic mood={mood}/>
            <StyleMusicList  />
        </div>
    );
}