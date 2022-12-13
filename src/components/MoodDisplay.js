import React from 'react';
import Card from 'react-bootstrap/Card';
import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, 
    ResponsiveContainer } from 'recharts';

export default function MoodDisplay (props) {
    const currentUser = props.currentUser;
    const moodsList = props.moodsList
    .filter((moodObj) => {
       return moodObj.userEmail === props.currentUser.userEmail;
    })
    .sort((a,b) => b.date - a.date);

    //console.log(moodsList);

    const MoodCard = (props) => {
        const {date, key, mood, note, sleepValue} = props.moodData;

        console.log(date);

        return (
            
                <Card style={{ width: '15rem' }}>
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
        <div className='m-2 col-xl-5 col-sm-8 col-lg-5'> 
            <MoodCard 
        moodData={moodObj}
        key={moodObj.key} />
        </div>;
        
        return result;
    });
    return (<div className='row container d-flex home-mood-fill' style={{flexDirection: "row", justifyContent: "space-evenly"}}> 
        {moodResult}
    </div>);

    }

    // const data = [{'note':"aaaaa", 'sleepValue':19}, {'note':"ssssss", 'sleepValue':1},];
    console.log(moodsList);
    const Chart = () => {
        return(
            <ResponsiveContainer width="99%" height={500}>
                <LineChart
                width="99%"
                height={300}
                data={moodsList}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                type="monotone"
                dataKey="sleepValue"
                stroke="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>
        );
        
    }
       
    

    if(moodsList.length === 0){

        return (
        <div>
    
            <header>
                <div className="container dash-border-light-bg">
                    <h1 className="primary-dark-color">MOOD LOG</h1>
                </div>
            </header>

            <main>
                <div className="d-flex" style={{flexDirection: "row", justifyContent: "center"}}>
                    <h2 className="primary-dark-color pt-3">No Mood Logs Available</h2>
                    <a className="btn save p-3 m-4" href="/mood">Create New Mood Log</a>
                </div>
                <div className='pb-5'> 
                <div className="illustration-container">
                    <img className="think-img" src="img/Mystery.svg" alt="a man looking into the mistery box" />
                </div>
                
                <div className="text-end me-4 illustration-cite">
                    <a href="https://storyset.com/people">-- People illustrations by Storyset</a>
                </div>
            </div>
                
            </main>
        </div>
        );
        
        
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
                    <a className="btn save p-3 m-4" href="mood">Create New Mood Log</a>
                </div>
                <div style={{justifyContent: "center"}}>
                    <MoodArrange/>
                    <div className='card m-5 d-flex' style={{justifyContent: "center"}}>
                        <h2 className="primary-dark-color" style={{textAlignVertical: "center",textAlign: "center",}} >Sleeping Time Graph</h2>
                        <Chart/>
                    </div>
                    
                </div>
                
            </main>
        </div>
    );
}