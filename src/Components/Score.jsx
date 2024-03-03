import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score} = this.props;

        return (
            <div className='score'>
                <center>
                <h2>Results</h2>
                <h4>Your Score: <b>{score}/10</b></h4>
                </center>
            </div>
        );
    }
}

export default Score;