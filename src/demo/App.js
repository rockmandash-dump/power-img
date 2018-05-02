import React, { Component, Fragment } from 'react';
import PowerImg from '../lib';
import cat from './images/cat.jpg';

const effects = [
  { type: 'DiamondCrop' },
  { type: 'Blur', factor: 10, passes: 4 }
];

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>Power Image Demo</p>
        <PowerImg src={cat} effects={effects} />
      </Fragment>
    );
  }
}

export default App;
