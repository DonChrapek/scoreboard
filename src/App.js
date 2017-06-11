import React from 'react';
import './css/App.css';

import {Footer} from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Here comes the Scoreboard</h1>
          <Footer />
      </div>
    );
  }
}
