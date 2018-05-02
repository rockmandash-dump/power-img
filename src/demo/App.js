import React, { Fragment } from 'react';
import PowerImg from '../lib';
import cat from './images/cat.jpg';

const App = () => (
  <Fragment>
    <p>Power Image Demo</p>
    <PowerImg src={cat} />
  </Fragment>
);

export default App;
