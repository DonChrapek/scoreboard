import React from 'react';
import './css/scoreboard.css';

import Player from './Player';

export default class Scoreboard extends React.Component {
    render() {
        return (
            <section id="scoreboard">
                <div className="scoreboard-title">
                    <h1>Scoreboard</h1>
                </div>
                <div className="scoreboard-rank">
                    <Player />
                    <Player />
                    <Player />
                </div>
            </section>
        )
    }
}