import { Store } from '@shagstrom/react-store';
import React from 'react';
import ReactDOM from 'react-dom';
import initialUser from './actions/userActions';
import MainComponent from './components/MainComponent';
import initialCounter from './actions/counterActions'

ReactDOM.render(
  <Store user={initialUser} counter={initialCounter}>
    <MainComponent />
  </Store>,
  document.getElementById('app')
);
