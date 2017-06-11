import React from 'react';
import './css/player.css';

export default class Player extends React.Component {
    render() {
        return (
            <div className="player-wrapper">
                <div className="player-name">
                    <h3>Name</h3>
                </div>
                <div className="player-score">
                    <button id="decrement red-button"> - </button>
                    <div id="score-box"></div>
                    <button id="increment green-button"> + </button>
                </div>
            </div>
        )
    }
}