import React from 'react';
import './css/player.css';

export default class Player extends React.Component {
    
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }
    
    incrementScore() { this.setState({ score: this.state.score + 1 }) }
    
    decrementScore() { this.setState({ score: this.state.score - 1 }) } 
    
    render() {
        return (
            <div className="player-wrapper">
                <div className="player-name">
                    <h3>{this.props.name}</h3>
                </div>
                <div className="player-score">
                    <button id="decrement" className="red-button" onClick={this.decrementScore.bind(this)}> - </button>
                    <div id="score-box">{this.state.score}</div>
                    <button id="increment" className="green-button" onClick={this.incrementScore.bind(this)}> + </button>
                </div>
            </div>
        )
    }
}