import React from 'react';
import './css/scoreboard.css';

import Player from './Player';

export default class Scoreboard extends React.Component {
    
    PLAYERS = []
    
    constructor() {
        super();
        this.state = { 
            players: this.PLAYERS,
        }
    }
    
    addPlayer(e) {
        e.preventDefault();
        
        let newPlayerName = document.getElementById('newplayer').value;
        newPlayerName === "" ? alert("Player's name can't be blank") : this.setState({ players: this.state.players.concat(newPlayerName) });
        document.getElementById('newplayer').value = "";
    }
    
    render() {
        return (
            <section id="scoreboard">
                <div className="scoreboard-title">
                    <h1>Scoreboard</h1>
                    <input type="text" name="newplayer" id="newplayer" />
                    <input type="submit" value="+ Add player" onClick={this.addPlayer.bind(this)} />
                </div>
                <div className="scoreboard-rank">
                    { this.state.players.map((name, index) => {
                        return <Player name={name} key={index} />
                    }) }
                </div>
            </section>
        )
    }
}