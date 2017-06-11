import React from 'react';
import './css/App.css';

import {Footer} from './Footer';
import Scoreboard from './Scoreboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <Scoreboard />
          <Footer />
      </div>
    );
  }
}
