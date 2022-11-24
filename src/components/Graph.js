import React from 'react';

export default function Graph () {
    return (
        <div className="container">          
            <h2>Weekly View</h2>
            <div className="card-container d-flex flex-lg-row flex-md-column">
                <div className="card m-1 mood-card">
                    <div className="card-body">
                        <img src="img/sleep-graph.png" className="img-fluid" alt="graph of sleep per day"/>
                    </div>
                </div>
                <div className="card m-1 mood-card">
                    <div className="card-body">
                        <img src="img/mood-graph.png" className="img-fluid" alt="graph of mood distribution per week"/>
                    </div>
                </div>
                <div className="card m-1 mood-card">
                    <div className="card-body">
                        <img src="img/distribution.png" className="img-fluid" alt="graph of positive and negative mood distribution per week"/>
                    </div>
                </div>
            </div>
        </div>
    );
}