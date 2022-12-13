import React from 'react';
import Card from 'react-bootstrap/Card';


export default function MoodDisplay (props) {
    const currentUser = props.currentUser;
    const moodsList = props.moodsList
    .filter((moodObj) => {
       return moodObj.sleepValue > 0;
    })
    .sort((a,b) => b.date - a.date);

    const MoodCard = (props) => {
        const {date, key, mood, note, sleepValue} = props.moodData;

        console.log(date);

        return (
            
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="primary-dark-color">{date}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{mood}</Card.Subtitle>
                        {/* <Card.Text className={mood}>
                            {mood}
                        </Card.Text> */}
                        <Card.Text>
                            {note}
                        </Card.Text>
                    </Card.Body>
                </Card>
            
        );   
    }
    

    function MoodArrange () {
        const moodResult = moodsList.map((moodObj) => {
        const result = 
        <div className='pt-3 pb-3 ps-3 pe-4'> 
            <MoodCard 
        moodData={moodObj}
        key={moodObj.key} />
        </div>;
        
        return result;
    });
    return (<div className='d-flex' style={{flexDirection: "row", justifyContent: "center"}}> 
        {moodResult}
    </div>);

    }
    
        
       
    

    if(moodsList.length === 0){
        return <p>No Mood Logs Available</p>
    }


//     moodsList.map((obj) => {
//         console.log(obj);
// });



    return (
        <div>
    
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">MOOD LOG</h1>
                </div>
            </header>

            <main>
                <div className="d-flex" style={{flexDirection: "row", justifyContent: "center"}}>
                    <a className="btn save p-3 m-4" href="http://localhost:3000/mood">Create New Mood Log</a>
                </div>
                <div>
                    <MoodArrange/>
                </div>
            </main>
        </div>
    );
}